﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ZG.Store.Common.Email
{
    public interface IEmailSettingsFactory
    {
        EmailSettings GetEmailSettings(EmailType emailType);
    }

    public class EmailSettingsFactory : IEmailSettingsFactory
    {
        private const string ExceptionMessage = "Appsetting key {0} was not found.";

        public EmailSettings GetEmailSettings(EmailType emailType)
        {
            var emailSettings = new EmailSettings();
            //emailSettings.UseSsl = true;
            //emailSettings.SmtpUserName = ConfigurationManager.AppSettings[EmailSettingKey.SmtpUserName];
            //if (emailSettings.SmtpUserName == null)
            //{
            //    throw new AppSettingKeyNotFoundException(ExceptionMessage, EmailSettingKey.SmtpUserName);
            //}
            //emailSettings.SmtpPassword = ConfigurationManager.AppSettings[EmailSettingKey.SmtpPassword];
            //if (emailSettings.SmtpPassword == null)
            //{
            //    throw new AppSettingKeyNotFoundException(ExceptionMessage, EmailSettingKey.SmtpPassword);
            //}
            //emailSettings.SmtpServerName = ConfigurationManager.AppSettings[EmailSettingKey.SmtpServerName];
            //if (emailSettings.SmtpServerName == null)
            //{
            //    throw new AppSettingKeyNotFoundException(ExceptionMessage, EmailSettingKey.SmtpServerName);
            //}

            //string smtpServerPort = ConfigurationManager.AppSettings[EmailSettingKey.SmtpServerPort];
            //if (smtpServerPort == null)
            //{
            //    throw new AppSettingKeyNotFoundException(ExceptionMessage, EmailSettingKey.SmtpServerPort);
            //}
            //emailSettings.SmtpServerPort = int.Parse(smtpServerPort);

            //string writeAsFile = ConfigurationManager.AppSettings[EmailSettingKey.WriteAsFile];
            //emailSettings.WriteAsFile = !string.IsNullOrWhiteSpace(writeAsFile) && bool.Parse(writeAsFile);

            //if (emailSettings.WriteAsFile)
            //{
            //    emailSettings.FileLocation = ConfigurationManager.AppSettings[EmailSettingKey.FileLocation];
            //    if (emailSettings.FileLocation == null)
            //    {
            //        throw new AppSettingKeyNotFoundException(ExceptionMessage, EmailSettingKey.FileLocation);
            //    }
            //}

            //switch (emailType)
            //{
            //    case EmailType.NewOrderNotificationToAdmin:
            //        emailSettings.Addresses.MailFromAddress = ConfigurationManager.AppSettings[EmailSettingKey.OrderNotificationFromAddress];
            //        if (emailSettings.Addresses.MailFromAddress == null)
            //        {
            //            throw new AppSettingKeyNotFoundException(ExceptionMessage, EmailSettingKey.OrderNotificationFromAddress);
            //        }
            //        emailSettings.Addresses.MailFromName = ConfigurationManager.AppSettings[EmailSettingKey.OrderNotificationFromName];

            //        emailSettings.Addresses.MailToAddress = ConfigurationManager.AppSettings[EmailSettingKey.OrderNotificationToAddress];
            //        if (emailSettings.Addresses.MailToAddress == null)
            //        {
            //            throw new AppSettingKeyNotFoundException(ExceptionMessage, EmailSettingKey.OrderNotificationToAddress);
            //        }
            //        emailSettings.Addresses.MailToName = ConfigurationManager.AppSettings[EmailSettingKey.OrderNotificationToName];

            //        emailSettings.Addresses.MailCcAddress = ConfigurationManager.AppSettings[EmailSettingKey.OrderNotificationCcAddress];
            //        break;
            //}

            return emailSettings;
        }
    }
}
