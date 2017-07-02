using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ZG.Store.Common;

namespace ZG.Store.Domain.DTO
{
    public class OrderBriefInfo
    {
        public int Id { get; set; }
        public Guid? UserId { get; set; }
        public string FullName { get; set; }
        public string OrderNumber { get; set; }
        public string OrderStatus { get; set; }
        public string ShippingProvider { get; set; }
        public string ShippingCountry { get; set; }
        public string Comments { get; set; }
        public DateTime OrderDate { get; set; }
        public string OrderDateString { get { return OrderDate.ToString(Constants.MMMMddyyyyhhmmtt); } }
        public DateTime? DateShipped { get; set; }
        public string DateShippedString 
        {
            get 
            {
                if (DateShipped.HasValue)
                {
                    return DateShipped.Value.ToString(Constants.MMMMddyyyyhhmmtt);
                }

                return "";
            } 
        }
        public decimal Total { get; set; }
        public decimal Shipping { get; set; }
        public decimal Tax { get; set; }
        public bool Active { get; set; }
    }
}
