using System;
using System.Collections.Generic;
using System.Text;
using System.ComponentModel.DataAnnotations;

namespace ZG.Store.Domain.Models
{
    public class Order
    {
        public int OrderId { get; set; }
        public int? UserId { get; set; }
        public User User { get; set; }

        [Required]
        [MaxLength(100)]
        public string FullName { get; set; }
        [Required]
        [MaxLength(50)]
        public string OrderNumber { get; set; }
        public System.DateTime OrderDate { get; set; }

        public int OrderStatusId { get; set; }
        public OrderStatus OrderStatu { get; set; }

        [Required]
        public int ShippingProviderId { get; set; }
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
        public State BillingState { get; set; }

        public int? BillingProvinceId { get; set; }
        public Province BillingProvince { get; set; }
        
        public int BillingCountryId { get; set; }
        public Country BillingCountry { get; set; }

        public int ShippingCountryId { get; set; }
        public Country ShippingCountry { get; set; }

        public ShippingProvider ShippingProvider { get; set; }

        public int? ShippingStateId { get; set; }
        public State ShippingState { get; set; }
        
        public int? ShippingProvinceId { get; set; }
        public virtual Province ShippingProvince { get; set; }

        public List<OrderProduct> OrderProducts { get; set; }
    }
}
