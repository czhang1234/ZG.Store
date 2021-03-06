﻿using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;
using ZG.Store.Common.Dto;

namespace ZG.Store.Common.Email
{
    public interface IEmailSender
    {
        EmailSendingResult Send(EmailSettings emailSettings, string subject, string body, bool isBodyHtml);
    }

    public class EmailSender : IEmailSender
    {
        public MailAddresses MailAddresses { get; set; }

        public EmailSendingResult Send(EmailSettings emailSettings, string subject, string body, bool isBodyHtml)
        {
            var result = new EmailSendingResult();
            //try
            //{
            //    using (var smtpClient = new SmtpClient())
            //    {
            //        smtpClient.EnableSsl = emailSettings.UseSsl;
            //        smtpClient.Host = emailSettings.SmtpServerName;
            //        smtpClient.Port = emailSettings.SmtpServerPort;
            //        smtpClient.UseDefaultCredentials = false;
            //        smtpClient.Credentials = new NetworkCredential(emailSettings.SmtpUserName, emailSettings.SmtpPassword);
                    
            //        if (emailSettings.WriteAsFile)
            //        {
            //            smtpClient.DeliveryMethod = SmtpDeliveryMethod.SpecifiedPickupDirectory;
            //            smtpClient.PickupDirectoryLocation = emailSettings.FileLocation;
            //            smtpClient.EnableSsl = false;
            //        }

            //        var mailMessage = new MailMessage(emailSettings.Addresses.MailFromAddress, emailSettings.Addresses.MailToAddress, subject, body);
            //        mailMessage.IsBodyHtml = isBodyHtml;

            //        if (emailSettings.WriteAsFile)
            //        {
            //            mailMessage.BodyEncoding = Encoding.ASCII;
            //        }

            //        smtpClient.Send(mailMessage);
            //    }

            //    result.Status = EmailSendingStatus.Success;
            //}
            //catch (Exception ex)
            //{
            //    Logger.ErrorFormat(ex, "", null);

            //    result.Status = EmailSendingStatus.Failed;
            //    result.ExceptionMessage = ex.Message;
            //}

            return result;
        }
    }
}
