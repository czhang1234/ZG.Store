using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;

using ZG.Store.Services.Models;
using Microsoft.EntityFrameworkCore;
using ZG.Store.Services.Services;
using Microsoft.AspNetCore.Rewrite;

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

            //services.AddDbContext<ApplicationDbContext>(options =>
            //    options.UseSqlServer(Configuration.GetConnectionString(CONNECTION_STRING_NAME)));

            services.AddDbContext<StoreContext>(options => options.UseSqlServer(Configuration.GetConnectionString(CONNECTION_STRING_NAME)));
            services.AddDbContext<ProductContext>(options => options.UseSqlServer(Configuration.GetConnectionString(CONNECTION_STRING_NAME)));

            services.AddTransient<IProductCatetoryService, ProductCatetoryService>();

            services.AddCors(options =>
            {
                options.AddPolicy("CorsPolicy",
                    builder => builder.AllowAnyOrigin()
                    .AllowAnyMethod()
                    .AllowAnyHeader()
                    .AllowCredentials());
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

            app.UseMvc();
            app.UseDefaultFiles();
            app.UseStaticFiles();
        }
    }
}
