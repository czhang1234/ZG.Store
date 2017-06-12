using System;
using System.Collections.Generic;
using System.Text;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ZG.Store.Domain.Models
{
    public class State
    {
        public int StateId { get; set; }
        [Required]
        [MaxLength(50)]
        public string Name { get; set; }
        [Required]
        [MaxLength(2)]
        public string Code { get; set; }
        public Nullable<bool> Active { get; set; }
        public virtual ICollection<Address> Addresses { get; set; }
        [InverseProperty("BillingState")]
        public List<Order> OrdersBilling { get; set; }
        [InverseProperty("ShippingState")]
        public List<Order> OrdersShipping { get; set; }
        public List<Shipping> Shippings { get; set; }
        public List<Tax> Taxes { get; set; }
    }
}
