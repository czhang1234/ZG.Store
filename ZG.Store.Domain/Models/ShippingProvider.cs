using System;
using System.Collections.Generic;
using System.Text;
using System.ComponentModel.DataAnnotations;

namespace ZG.Store.Domain.Models
{
    public class ShippingProvider
    {
        public int ShippingProviderId { get; set; }
        [Required]
        [MaxLength(50)]
        public string Name { get; set; }
        [Required]
        public decimal ShippingCost { get; set; }
        [Required]
        public bool Active { get; set; }

        public List<Order> Orders { get; set; }
        public List<Shipping> Shippings { get; set; }
    }
}
