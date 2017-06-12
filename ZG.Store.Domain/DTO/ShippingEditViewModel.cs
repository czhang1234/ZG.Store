using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ZG.Store.Domain.DTO
{
    public class ShippingEditViewModel
    {
        [Key]
        public int Id { get; set; }
        public int CountryID { get; set; }
        public int? StateId { get; set; }
        public string City { get; set; }
        public int? ProvinceId { get; set; }
        public int ProductId { get; set; }
        public int ShippingProviderId { get; set; }
        public decimal Rate { get; set; }
        public bool Active { get; set; }
    }
}
