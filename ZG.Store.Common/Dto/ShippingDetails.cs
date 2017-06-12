using System;
using System.Collections.Generic;
using System.Text;

namespace ZG.Store.Common.Dto
{
    public class ShippingDetails
    {
        public Address ShippingAddress { get; set; }
        public bool GiftWrap { get; set; }

        public ShippingDetails()
        {
            ShippingAddress = new Address();
        }
    }
}
