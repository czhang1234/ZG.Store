using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;
using ZG.Store.Domain.Models;

namespace ZG.Store.Domain.DTO
{
    public class OrderProductDto
    {
        public int OrderProductId { get; set; }
        public int OrderId { get; set; }

        public int ProductId { get; set; }
        public string ProductName { get; set; }

        public int Quantity { get; set; }
        public decimal PricePerUnit { get; set; }
        public decimal TotalPrice { get; set; }
        public decimal? Discount { get; set; }
        public decimal Shipping { get; set; }
        [MaxLength(50)]
        public string DownloadKey { get; set; }
        [MaxLength(400)]
        public string DownloadURL { get; set; }
        public DateTime OrderDate { get; set; }
        public bool Active { get; set; }

        public static OrderProduct ToOrderProduct(OrderProductDto orderProdDto)
        {
            return new OrderProduct
            {
                OrderProductId = orderProdDto.OrderProductId,
                OrderId = orderProdDto.OrderId,
                ProductId = orderProdDto.ProductId,
                Quantity = orderProdDto.Quantity,
                PricePerUnit = orderProdDto.PricePerUnit,
                TotalPrice = orderProdDto.TotalPrice,
                Discount = orderProdDto.Discount,
                Shipping = orderProdDto.Shipping,
                DownloadKey = orderProdDto.DownloadKey,
                DownloadURL = orderProdDto.DownloadURL,
                OrderDate = orderProdDto.OrderDate,
                Active = orderProdDto.Active
            };
        }

        public static OrderProductDto ToOrderProductDto(OrderProduct orderProduct)
        {
            return new OrderProductDto
            {
                OrderProductId = orderProduct.OrderProductId,
                OrderId = orderProduct.OrderId,
                ProductId = orderProduct.ProductId,
                ProductName = orderProduct.Product.Name,
                Quantity = orderProduct.Quantity,
                PricePerUnit = orderProduct.PricePerUnit,
                TotalPrice = orderProduct.TotalPrice,
                Discount = orderProduct.Discount,
                Shipping = orderProduct.Shipping,
                DownloadKey = orderProduct.DownloadKey,
                DownloadURL = orderProduct.DownloadURL,
                OrderDate = orderProduct.OrderDate,
                Active = orderProduct.Active
            };
        }
    }
}
