using System;
using System.Collections.Generic;
using System.Text;
using System.ComponentModel.DataAnnotations;
using ZG.Store.Common;
using System.Linq;
using ZG.Store.Domain.DTO;
using ZG.Store.Domain.Models;

namespace ZG.Store.Domain.DTO
{
    public class ProductDto
    {
        public int ProductId { get; set; }

        public int ProductCategoryId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
   
        public decimal SalePrice { get; set; }
        public decimal Weight { get; set; }
        public decimal ShippingWeight { get; set; }
        public decimal Height { get; set; }
        public decimal ShippingHeight { get; set; }
        public decimal Length { get; set; }
        public decimal ShippingLength { get; set; }
        public decimal Width { get; set; }
        public decimal ShippingWidth { get; set; }
        public string ProductLink { get; set; }
        public bool IsReviewEnabled { get; set; }
        public int TotalReviewCount { get; set; }
        public decimal? RatingScore { get; set; }
        public bool Active { get; set; }

        public List<ProductImageDto> Images { get; set; }

        public static ProductDto Get(Product product)
        {
            return new ProductDto()
            {
                ProductId = product.ProductId,
                ProductCategoryId = product.ProductCategoryId,
                Name = product.Name,
                Description = product.Description,
                SalePrice = product.SalePrice,
                Weight = product.Weight,
                ShippingWeight = product.ShippingWeight,
                Height = product.Height,
                ShippingHeight = product.ShippingHeight,
                Length = product.Length,
                ShippingLength = product.ShippingLength,
                Width = product.Width,
                ShippingWidth = product.ShippingWidth,
                ProductLink = product.ProductLink,
                IsReviewEnabled = product.IsReviewEnabled,
                TotalReviewCount = product.TotalReviewCount,
                RatingScore = product.RatingScore,
                Active = product.Active,
                Images = product.Images.Select(img => new ProductImageDto() { ProductImageId = img.ProductImageId, FileName = img.FileName }).ToList()
            };
        }
    }
}
