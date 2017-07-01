using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;
using ZG.Store.Domain.Models;

namespace ZG.Store.Domain.DTO
{
    public class OrderProductDto
    {
        public int OrderProductId { get; set; }
        public int OrderId { get; set; }

        public int ProductId { get; set; }

        public int Quantity { get; set; }
        public decimal PricePerUnit { get; set; }
        public decimal TotalPrice { get; set; }
        public decimal? Discount { get; set; }
        public decimal Shipping { get; set; }
        [MaxLength(50)]
        public string DownloadKey { get; set; }
        [MaxLength(400)]
        public string DownloadURL { get; set; }
        public DateTime OrderDate { get; set; }
        public bool Active { get; set; }
    }
}
