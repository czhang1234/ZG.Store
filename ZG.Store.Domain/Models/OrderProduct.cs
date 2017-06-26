using System;
using System.Collections.Generic;
using System.Text;
using System.ComponentModel.DataAnnotations;

namespace ZG.Store.Domain.Models
{
    public class OrderProduct
    {
        public int OrderProductId { get; set; }
        public int OrderId { get; set; }
        public Order Order { get; set; }

        public int ProductId { get; set; }
        public Product Product { get; set; }

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
