using System;
using System.Collections.Generic;
using System.Text;
using System.ComponentModel.DataAnnotations;

namespace ZG.Store.Services.Models
{
    public class ProductCategory
    {
        public int ProductCategoryId { get; set; }

        public List<Product> Products { get; set; }

        public int? ParentID { get; set; }
        [Required]
        [MaxLength(50)]
        public string CategoryName { get; set; }
        [Required]
        public bool Active { get; set; }
    }
}
