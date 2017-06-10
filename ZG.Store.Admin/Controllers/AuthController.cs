using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Security.Principal;
using System.Threading.Tasks;
using ZG.Store.Admin.DTO;
using ZG.Store.Admin.Model;
using ZG.Store.Common.Auth;
using ZG.Store.Services.Services;

namespace ZG.Store.Admin.Controllers
{
    [Route("api/[controller]")]
    public class AuthController : Controller
    {
        private IAdminService _adminService;
        public AuthController(IAdminService adminService)
        {
            _adminService = adminService;
        }

        [HttpPost]
        public string GetAuthToken([FromBody]AdminDto admin)
        {
            var existingUser = _adminService.Get(admin.UserName, admin.Password);
            if (existingUser != null)
            {
                var requestAt = DateTime.UtcNow;
                var expiresIn = requestAt + TokenAuthOption.ExpiresSpan;
                var token = GenerateToken(new AdminDto { Id = existingUser.AdminId, UserName = existingUser.UserName, Password = existingUser.Password }, expiresIn);

                return JsonConvert.SerializeObject(new RequestResult
                {
                    State = RequestState.Success,
                    Data = new
                    {
                        requertAt = requestAt,
                        expiresIn = TokenAuthOption.ExpiresSpan.TotalSeconds,
                        tokeyType = TokenAuthOption.TokenType,
                        accessToken = token
                    }
                });
            }
            else
            {
                return JsonConvert.SerializeObject(new RequestResult
                {
                    State = RequestState.Failed,
                    Msg = "Username or password is invalid"
                });
            }
        }

        private string GenerateToken(AdminDto admin, DateTime expires)
        {
            var handler = new JwtSecurityTokenHandler();

            var identity = new ClaimsIdentity(
                new GenericIdentity(admin.UserName, "TokenAuth"),
                new[] {
                    new Claim("Id", admin.Id.ToString()),
                    new Claim("UserName", admin.UserName)
                }
            );

            var securityToken = handler.CreateToken(new SecurityTokenDescriptor
            {
                Issuer = TokenAuthOption.Issuer,
                Audience = TokenAuthOption.Audience,
                SigningCredentials = TokenAuthOption.SigningCredentials,
                Subject = identity,
                Expires = expires
            });
            return handler.WriteToken(securityToken);
        }
    }
}
