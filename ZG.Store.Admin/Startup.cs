using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;


using Microsoft.EntityFrameworkCore;
using ZG.Store.Services;
using Microsoft.AspNetCore.Rewrite;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using ZG.Store.Common.Auth;
using Microsoft.AspNetCore.Diagnostics;
using Newtonsoft.Json;
using ZG.Store.Admin.Model;
using System.Text;
using ZG.Store.Domain.Models;
using ZG.Store.Common.Email;

namespace ZG.Store.Admin
{
    public class Startup
    {
        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
                .AddEnvironmentVariables();
            Configuration = builder.Build();
        }

        public IConfigurationRoot Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            const string CONNECTION_STRING_NAME = "ZGStoreConnection";
         
            services.AddDbContext<ProductContext>(options => options.UseSqlServer(Configuration.GetConnectionString(CONNECTION_STRING_NAME)));
            services.AddDbContext<UserContext>(options => options.UseSqlServer(Configuration.GetConnectionString(CONNECTION_STRING_NAME)));
            services.AddDbContext<OrderContext>(options => options.UseSqlServer(Configuration.GetConnectionString(CONNECTION_STRING_NAME)));

            services.AddTransient<IProductCatetoryService, ProductCatetoryService>();
            services.AddTransient<IProductService, ProductService>();
            services.AddTransient<IProductImageService, ProductImageService>();
            services.AddTransient<IUserService, UserService>();
            services.AddTransient<IAdminService, AdminService>();
            services.AddTransient<IEmailService, EmailService>();
            services.AddTransient<IOrderService, OrderService>();
            services.AddTransient<IOrderStatusService, OrderStatusService>();
            services.AddTransient<IShippingProviderService, ShippingProviderService>();
            services.AddTransient<IEmailSender, EmailSender>();
            services.AddTransient<IEmailSettingsFactory, EmailSettingsFactory>();

            services.AddCors(options =>
            {
                options.AddPolicy("CorsPolicy",
                    builder => builder.AllowAnyOrigin()
                    .AllowAnyMethod()
                    .AllowAnyHeader()
                    .AllowCredentials());
            });

            // Enable the use of an [Authorize("Bearer")] attribute on methods and classes to protect.
            services.AddAuthorization(auth =>
            {
                auth.AddPolicy("Bearer", new AuthorizationPolicyBuilder()
                    .AddAuthenticationSchemes(JwtBearerDefaults.AuthenticationScheme‌​)
                    .RequireAuthenticatedUser().Build());
            });

            // Add framework services.
            services.AddMvc();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();

            // global policy - assign here or on each controller, like this [EnableCors("CorsPolicy")]
            //UseCors() has to be called before UseMvc()
            app.UseCors("CorsPolicy");
            app.UseDefaultFiles();
            app.UseStaticFiles();

            #region Handle Exception
            app.UseExceptionHandler(appBuilder =>
            {
                appBuilder.Use(async (context, next) =>
                {
                    var error = context.Features[typeof(IExceptionHandlerFeature)] as IExceptionHandlerFeature;

                    //when authorization has failed, should retrun a json message to client
                    if (error != null && error.Error is SecurityTokenExpiredException)
                    {
                        context.Response.StatusCode = 401;
                        context.Response.ContentType = "application/json";

                        var msg = GetMsg(RequestState.NotAuth, "token expired");
                        await context.Response.Body.WriteAsync(msg, 0, msg.Length);
                    }
                    //when orther error, retrun a error message json to client
                    else if (error != null && error.Error != null)
                    {
                        context.Response.StatusCode = 500;
                        context.Response.ContentType = "application/json";

                        var msg = GetMsg(RequestState.Failed, error.Error.Message);
                        await context.Response.Body.WriteAsync(msg, 0, msg.Length);
                    }
                    //when no error, do next.
                    else await next();
                });
            });
            #endregion

            #region UseJwtBearerAuthentication
            app.UseJwtBearerAuthentication(new JwtBearerOptions()
            {
                AutomaticAuthenticate = true,
                TokenValidationParameters = new TokenValidationParameters()
                {
                    IssuerSigningKey = TokenAuthOption.Key,
                    ValidAudience = TokenAuthOption.Audience,
                    ValidIssuer = TokenAuthOption.Issuer,
                    // When receiving a token, check that we've signed it.
                    ValidateIssuerSigningKey = true,
                    // When receiving a token, check that it is still valid.
                    ValidateLifetime = true,
                    // This defines the maximum allowable clock skew - i.e. provides a tolerance on the token expiry time 
                    // when validating the lifetime. As we're creating the tokens locally and validating them on the same 
                    // machines which should have synchronised time, this can be set to zero. Where external tokens are
                    // used, some leeway here could be useful.
                    ClockSkew = TimeSpan.FromMinutes(0)
                }
            });
            #endregion

            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller=Home}/{action=Index}");

                routes.MapSpaFallbackRoute("spa-fallback", new { controller = "Home", action = "Index" });
            });
        }

        private byte[] GetMsg(RequestState state, string msg)
        {
            var uniencoding = new UnicodeEncoding();
            byte[] bytes = uniencoding.GetBytes(JsonConvert.SerializeObject(new RequestResult
            {
                State = state,
                Msg = msg
            }));

            return bytes;
        }
    }
}
