using System;
using System.Collections.Generic;
using System.Security.Cryptography;
using System.Text;

namespace ZG.Store.Common.Auth
{
    public class RSAKeyHelper
    {
        public static RSAParameters GenerateKey()
        {
            using (var key = RSA.Create())
            {
                return key.ExportParameters(true);
            }
        }
    }
}
