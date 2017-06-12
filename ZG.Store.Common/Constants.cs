using System;

namespace ZG.Store.Common
{
    public static class Constants
    {
        public static readonly DateTime DefaultDateTime = new DateTime(1900, 1, 1);
        public const string PhonePatternTenDigits = @"^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$";
        /// <summary>
        /// p
        /// </summary>
        public const string PageNumberQueryStringParam = "p";

        public const string ProductImageDirectory = "ProdImages";
        public const string MMMMddyyyyhhmmtt = "MMMM dd, yyyy hh:mm tt";
    }

    public static class ImageFileNamePatterns
    {
        public static string[] Patterns
        {
            get
            {
                return new string[] { "*.jpeg", "*.jpg", "*.bmp", "*.png" };
            }
        }
    }

    public static class Countries
    {
        public static string UNITED_STATES = "UNITED STATES";
        public static string CHINA = "CHINA";
        public static string CANADA = "CANADA";
    }

    public class ValidationErrorMessage
    {
        public const string MinimumLength = "The {0} must be at least {2} characters long.";
        public const string MaximumLength = "Maximum {0} characters exceeded";
        public const string ConfirmPassword = "Please enter the same password again.";
        public const string Email = "Please enter a valid email address.";
        public const string ConfirmEmail = "Please enter the same e-mail address again.";
        public const string Required = "This field is required";
        public const string RequiredAddressPhone = "Please supply a phone number so we can call if there are any problems using this address.";
        public const string Phone = "Please enter a valid phone number.";
    }

    public class RoleName
    {
        public const string Admin = "Admin";
        public const string Customer = "Customer";
    }

    public class EmailSettingKey
    {
        public const string SmtpUserName = "SmtpUserName";
        public const string SmtpPassword = "SmtpPassword";
        public const string SmtpServerName = "SmtpServerName";
        public const string SmtpServerPort = "SmtpServerPort";
        public const string WriteAsFile = "WriteAsFile";
        public const string FileLocation = "FileLocation";
        public const string OrderNotificationToAddress = "OrderNotificationToAddress";
        public const string OrderNotificationToName = "OrderNotificationToName";
        public const string OrderNotificationCcAddress = "OrderNotificationCcAddress";
        public const string OrderNotificationFromAddress = "OrderNotificationFromAddress";
        public const string OrderNotificationFromName = "OrderNotificationFromName";
    }
}
