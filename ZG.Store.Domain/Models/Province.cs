using System;
using System.Collections.Generic;
using System.Text;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ZG.Store.Domain.Models
{
    public class Province
    {
        public int ProvinceId { get; set; }
        public int CountryId { get; set; }
        public Country Country { get; set; }

        [Required]
        [MaxLength(50)]
        public string Name { get; set; }
        [MaxLength(2)]
        public string Code { get; set; }
        public bool Active { get; set; }
        
        public List<Address> Addresses { get; set; }
        [InverseProperty("BillingProvince")]
        public List<Order> OrdersBilling { get; set; }
        [InverseProperty("ShippingProvince")]
        public List<Order> OrdersShipping { get; set; }
        public List<Shipping> Shippings { get; set; }
        public List<Tax> Taxes { get; set; }
    }
}
