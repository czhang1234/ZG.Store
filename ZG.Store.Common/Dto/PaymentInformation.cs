using System;
using System.Collections.Generic;
using System.Text;

namespace ZG.Store.Common.Dto
{
    public class PaymentInformation
    {
        public Address BillingAdress { get; set; }

        public PaymentInformation()
        {
            BillingAdress = new Address();
        }
    }
}
