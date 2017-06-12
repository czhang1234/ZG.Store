using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ZG.Store.Common;

namespace ZG.Store.Common.Dto
{
    public class EmailSendingResult
    {
        public EmailSendingStatus Status { get; set; }
        public string ExceptionMessage { get; set; }

        public EmailSendingResult()
        {
            Status = EmailSendingStatus.Sending;
            ExceptionMessage = "";
        }
    }
}
