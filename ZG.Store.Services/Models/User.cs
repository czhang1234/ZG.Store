using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace ZG.Store.Services.Models
{
    public class User
    {
        public Guid UserId { get; set; }

        [Required]
        [MaxLength(50)]
        public string UserName { get; set; }
        [Required]
        [MaxLength(50)]
        public string Password { get; set; }

        [Required]
        [MaxLength(100)]
        public string FName { get; set; }
        [Required]
        [MaxLength(100)]
        public string LName { get; set; }
        [Required]
        [MaxLength(100)]
        public string Email { get; set; }

        [Required]
        [MaxLength(50)]
        public string Phone { get; set; }
        [Required]
        public System.DateTime DateCreated { get; set; }
        public DateTime? DateUpdated { get; set; }
        public bool Active { get; set; }

        public List<Address> Addresses { get; set; }
    }
}
