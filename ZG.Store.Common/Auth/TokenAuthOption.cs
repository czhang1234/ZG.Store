using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.Security.Cryptography;
using System.Text;

namespace ZG.Store.Common.Auth
{
    public class TokenAuthOption
    {
        public static string Audience { get; } = "ZGStoreAudience";
        public static string Issuer { get; } = "ZGStoreIssuer";
        //public static RsaSecurityKey Key { get; } = new RsaSecurityKey(RSAKeyHelper.GenerateKey());
        //public static string x = RSAKeyHelper.GenerateKey().ToString();

        // secretKey contains a secret passphrase only your server knows
        public static string secretKey = "123456sdafasdfsdsdafasdfsdafsadfsadfasdfasdfasdfasdfasdfasdfasdfasdfasdfasfasfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfsadfasdfasdfasdfasdfasd";
        public static SymmetricSecurityKey Key = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(secretKey));

        public static SigningCredentials SigningCredentials { get; } = new SigningCredentials(Key, SecurityAlgorithms.HmacSha256Signature);

        public static TimeSpan ExpiresSpan { get; } = TimeSpan.FromMinutes(40);
        public static string TokenType { get; } = "Bearer";
    }
}
