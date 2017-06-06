using System;
using System.Collections.Generic;
using System.Text;
using System.ComponentModel.DataAnnotations;
using ZG.Store.Common;

namespace ZG.Store.Services.Models
{
    public class Product
    {
        public int ProductId { get; set; }

        public int ProductCategoryId { get; set; }
        public ProductCategory ProductCategory { get; set; }

        [Required(ErrorMessage = ValidationErrorMessage.Required)]
        [MaxLength(50)]
        public string Name { get; set; }
        [Required(ErrorMessage = ValidationErrorMessage.Required)]
        public string Description { get; set; }
        [Required]
        public decimal SalePrice { get; set; }
        [Required(ErrorMessage = ValidationErrorMessage.Required)]
        public decimal Weight { get; set; }
        [Required(ErrorMessage = ValidationErrorMessage.Required)]
        public decimal ShippingWeight { get; set; }
        [Required(ErrorMessage = ValidationErrorMessage.Required)]
        public decimal Height { get; set; }
        [Required(ErrorMessage = ValidationErrorMessage.Required)]
        public decimal ShippingHeight { get; set; }
        [Required(ErrorMessage = ValidationErrorMessage.Required)]
        public decimal Length { get; set; }
        [Required(ErrorMessage = ValidationErrorMessage.Required)]
        public decimal ShippingLength { get; set; }
        [Required(ErrorMessage = ValidationErrorMessage.Required)]
        public decimal Width { get; set; }
        [Required(ErrorMessage = ValidationErrorMessage.Required)]
        public decimal ShippingWidth { get; set; }
        [MaxLength(400)]
        public string ProductLink { get; set; }
        [Required(ErrorMessage = ValidationErrorMessage.Required)]
        public bool IsReviewEnabled { get; set; }
        public int TotalReviewCount { get; set; }
        public decimal? RatingScore { get; set; }
        [Required(ErrorMessage = ValidationErrorMessage.Required)]
        public bool Active { get; set; }

        public List<ProductImage> Images { get; set; }


    }
}
