using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ZG.Store.Domain.Models;
using System.ComponentModel.DataAnnotations;

namespace ZG.Store.Domain.DTO
{
    public class OrderDto
    {
        public int OrderId { get; set; }
        public Guid? UserId { get; set; }

        [Required]
        [MaxLength(100)]
        public string FullName { get; set; }
        [Required]
        [MaxLength(50)]
        public string OrderNumber { get; set; }
        public System.DateTime OrderDate { get; set; }

        public int OrderStatusId { get; set; }

        [Required]
        [MaxLength(50)]
        public string ShippingNumber { get; set; }
        [Required]
        [MaxLength(50)]
        public string BillingAddress1 { get; set; }
        [MaxLength(50)]
        public string BillingAddress2 { get; set; }
        [Required]
        [MaxLength(50)]
        public string BillingCity { get; set; }


        [Required]
        [MaxLength(50)]
        public string BillingZipcode { get; set; }
        [Required]
        [MaxLength(50)]
        public string ShippingAddress1 { get; set; }
        [MaxLength(50)]
        public string ShippingAddress2 { get; set; }
        [Required]
        [MaxLength(50)]
        public string ShippingCity { get; set; }

        [Required]
        [MaxLength(50)]
        public string ShippingZipcode { get; set; }
        [MaxLength(400)]
        public string Comments { get; set; }
        public DateTime DatePlaced { get; set; }
        public DateTime? DateShipped { get; set; }
        public decimal Total { get; set; }
        public decimal Shipping { get; set; }
        public decimal Tax { get; set; }
        public bool Active { get; set; }

        public int? BillingStateId { get; set; }

        public int? BillingProvinceId { get; set; }

        public int BillingCountryId { get; set; }

        public int ShippingCountryId { get; set; }

        [Required]
        public int ShippingProviderId { get; set; }

        public int? ShippingStateId { get; set; }

        public int? ShippingProvinceId { get; set; }

        public List<OrderProductDto> OrderProducts { get; set; }

        public static OrderDto Get(Order order)
        {
            return new OrderDto()
            {
                OrderId = order.OrderId,
                UserId = order.UserId,
                FullName = order.FullName,
                OrderNumber = order.OrderNumber,
                OrderDate = order.OrderDate,
                OrderStatusId = order.OrderStatusId,
                ShippingNumber = order.ShippingNumber,
                BillingAddress1 = order.BillingAddress1,
                BillingAddress2 = order.BillingAddress2,
                BillingCity = order.BillingCity,
                BillingZipcode = order.BillingZipcode,
                ShippingAddress1 = order.ShippingAddress1,
                ShippingAddress2 = order.ShippingAddress2,
                ShippingCity = order.ShippingCity,
                ShippingZipcode = order.ShippingZipcode,
                Comments = order.Comments,
                DatePlaced = order.DatePlaced,
                Total = order.Total,
                Shipping = order.Shipping,
                Tax = order.Tax,
                Active = order.Active,
                BillingStateId = order.BillingStateId,
                BillingProvinceId = order.BillingProvinceId,
                BillingCountryId = order.BillingCountryId,
                ShippingCountryId = order.ShippingCountryId,
                ShippingProviderId = order.ShippingProviderId,
                ShippingStateId = order.ShippingStateId,
                ShippingProvinceId = order.ShippingProvinceId,
                OrderProducts = order.OrderProducts.Select(op => OrderProductDto.ToOrderProductDto(op)).ToList()
            };
        }
    }
}
