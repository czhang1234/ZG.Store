using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ZG.Store.Common.Concrete;

namespace ZG.Store.Common.Abstract
{
    public interface IEmailSettingsFactory
    {
        EmailSettings GetEmailSettings(EmailType emailType);
    }
}
