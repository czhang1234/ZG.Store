using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ZG.Store.Domain.Models;

namespace ZG.Store.Domain.DTO
{
    public class ProductCategoryListViewModel
    {
        public IEnumerable<ProductCategoryBriefInfo> Categories { get; set; }
        public int Total { get; set; }
    }
}
