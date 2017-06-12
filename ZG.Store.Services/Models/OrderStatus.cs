﻿using System;
using System.Collections.Generic;
using System.Text;
using System.ComponentModel.DataAnnotations;

namespace ZG.Store.Services.Models
{
    public class OrderStatus
    {
        public int OrderStatusId { get; set; }
        [MaxLength(50)]
        public string Name { get; set; }
        public bool Active { get; set; }

        public List<Order> Orders { get; set; }
    }
}
