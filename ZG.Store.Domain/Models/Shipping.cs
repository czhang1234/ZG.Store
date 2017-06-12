using System;
using System.Collections.Generic;
using System.Text;
using System.ComponentModel.DataAnnotations;

namespace ZG.Store.Domain.Models
{
    public class Shipping
    {
        public int ShippingId { get; set; }

        public int CountryId { get; set; }
        public Country Country { get; set; }

        public int? StateId { get; set; }
        public State State { get; set; }

        public string City { get; set; }

        public int? ProvinceId { get; set; }
        public Province Province { get; set; }

        public int ProductId { get; set; }
        public Product Product { get; set; }

        public int ShippingProviderId { get; set; }
        public ShippingProvider ShippingProvider { get; set; }

        public decimal Rate { get; set; }
        public bool Active { get; set; }
    }
}
