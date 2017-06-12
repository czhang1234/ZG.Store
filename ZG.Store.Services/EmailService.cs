using System;
using System.Collections.Generic;
using System.Text;
using ZG.Store.Common;
using ZG.Store.Common.Abstract;
using ZG.Store.Common.Concrete;
using ZG.Store.Common.Dto;
using ZG.Store.Domain.Models;

namespace ZG.Store.Services
{
    public interface IEmailService
    {
        /// <summary>
        /// Write to db, send email, update status in db
        /// </summary>
        /// <param name="emailType"></param>
        /// <param name="mailAddresses"></param>
        /// <param name="subject"></param>
        /// <param name="body"></param>
        /// <param name="isBodyHtml"></param>
        void ProcessEmail(EmailType emailType, MailAddresses mailAddresses, string subject, string body, bool isBodyHtml, int? orderId);
    }

    public class EmailService : IEmailService
    {
        private IEmailSender _emailSender;
        private IEmailSettingsFactory _emailSettingsFactory;
        private EmailSettings _emailSettings;

        private readonly OrderContext _context;

        public EmailService(OrderContext context, IEmailSettingsFactory emailSettingsFactory, IEmailSender emailSender)
        {
            _context = context;
            _emailSettingsFactory = emailSettingsFactory;
            _emailSender = emailSender;
        }

        public void ProcessEmail(EmailType emailType, MailAddresses mailAddresses, string subject, string body, bool isBodyHtml, int? orderId)
        {
            _emailSettings = _emailSettingsFactory.GetEmailSettings(emailType);
            if (mailAddresses != null)
            {
                _emailSettings.Addresses = mailAddresses;
            }

            var email = new Email
            {
                OrderId = orderId,
                FromAddress = _emailSettings.Addresses.MailFromAddress,
                ToAddress = _emailSettings.Addresses.MailToAddress,
                Subject = subject,
                Body = body,
                IsBodyHtml = isBodyHtml,
                Type = emailType.ToString(),
                Status = EmailSendingStatus.Sending.ToString(),
                CreationDate = DateTime.Now
            };

            _context.Emails.Add(email);
            _context.SaveChanges();

            EmailSendingResult result = _emailSender.Send(_emailSettings, subject, body, isBodyHtml);

            email.Status = result.Status.ToString();
            email.ExceptionMessage = result.ExceptionMessage;

            _context.Emails.Update(email);
            _context.SaveChanges();
        }
    }
}
