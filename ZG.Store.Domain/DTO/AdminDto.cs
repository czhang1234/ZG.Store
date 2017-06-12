using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ZG.Store.Domain.DTO
{
    public class AdminDto
    {
        public Guid Id { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
    }
}
