using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ZG.Store.Domain.Models;

namespace ZG.Store.Domain.DTO
{
    public class ProductListViewModel
    {
        public IEnumerable<ProductBriefInfo> Products { get; set; }
        public int TotalProducts { get; set; }
    }
}
