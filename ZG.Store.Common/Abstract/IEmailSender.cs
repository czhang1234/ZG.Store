using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ZG.Store.Common.Concrete;
using ZG.Store.Common.Dto;

namespace ZG.Store.Common.Abstract
{
    public interface IEmailSender
    {
        EmailSendingResult Send(EmailSettings emailSettings, string subject, string body, bool isBodyHtml);
    }
}
