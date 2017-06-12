using System;
using System.Collections.Generic;
using System.Text;
using System.ComponentModel.DataAnnotations;

namespace ZG.Store.Services.Models
{
    public class Address
    {
        public int AddressId { get; set; }

        public int UserId { get; set; }
        public User User { get; set; }
        
        public int CountryId { get; set; }
        public Country Country { get; set; }

        public int? StateId { get; set; }
        public State State { get; set; }

        public int? ProvinceId { get; set; }
        public Province Province { get; set; }

        [Required]
        [MaxLength(50)]
        public string City { get; set; }
        [Required]
        [MaxLength(50)]
        public string Address1 { get; set; }
        [MaxLength(50)]
        public string Address2 { get; set; }
        [Required]
        [MaxLength(50)]
        public string Zipcode { get; set; }
        [Required]
        [MaxLength(50)]
        public string Phone { get; set; }
        public DateTime CreationDate { get; set; }
        public bool IsBilling { get; set; }
        public bool IsShipping { get; set; }
        
    }
}
