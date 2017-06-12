using System;
using System.Collections.Generic;
using System.Text;
using System.ComponentModel.DataAnnotations;

namespace ZG.Store.Domain.Models
{
    public class Tax
    {
        public int TaxId { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public bool Fixed { get; set; }
        public decimal Amount { get; set; }

        public int CountryId { get; set; }
        public Country Country { get; set; }
        public int? StateID { get; set; }
        public State State { get; set; }
        public int?ProvinceID { get; set; }
        public Province Province { get; set; }

        [Required]
        public bool Active { get; set; }
    }
}
