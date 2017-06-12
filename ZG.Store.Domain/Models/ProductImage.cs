using System;
using System.Collections.Generic;
using System.Text;

namespace ZG.Store.Domain.Models
{
    public class ProductImage
    {
        public int ProductImageId { get; set; }
        public string FileName { get; set; }

        public int ProductId { get; set; }
        public Product Product { get; set; }
    }
}
