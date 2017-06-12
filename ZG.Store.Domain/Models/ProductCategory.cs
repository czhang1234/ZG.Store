using System;
using System.Collections.Generic;
using System.Text;
using System.ComponentModel.DataAnnotations;

namespace ZG.Store.Domain.Models
{
    public class ProductCategory
    {
        public int ProductCategoryId { get; set; }

        public List<Product> Products { get; set; }

        public int? ParentId { get; set; }
        [Required]
        [MaxLength(50)]
        public string CategoryName { get; set; }
        [Required]
        public bool Active { get; set; }
    }
}
