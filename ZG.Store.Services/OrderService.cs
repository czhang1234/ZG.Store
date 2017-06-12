using System;
using System.Collections.Generic;
using System.Text;
using ZG.Store.Common;
using ZG.Store.Domain;
using ZG.Store.Domain.DTO;
using ZG.Store.Domain.Models;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using ZG.Store.Common.Email;

namespace ZG.Store.Services
{
    public interface IOrderService
    {
        void ProcessOrder(Cart cart, CheckoutDetails checkoutDetails);
        IEnumerable<ShippingProvider> GetShippingProviders(bool isActive);
        OrderListViewModel GetOrders(bool active, int page, int pageSize);
        void Activate(int id);
        void Deactivate(int id);
        Order GetById(int id);
        OrderEditViewModel GetOrderEditViewModel(int id);
        CRUDStatus Update(OrderSaveModel order);
        IEnumerable<OrderStatus> GetOrderStatuses(bool isActive);
    }

    public class OrderService : IOrderService
    {
        private IEmailService _emailService;
        private IOrderStatusService _orderStatusService;

        private readonly StoreContext _context;

        public OrderService(StoreContext context, IEmailService emailService, IOrderStatusService orderStatusService)
        {
            _context = context;
            _emailService = emailService;
            _orderStatusService = orderStatusService;
        }

        public void ProcessOrder(Cart cart, CheckoutDetails checkoutDetails)
        {
            AddOrder(cart, checkoutDetails);

            //TODO: payment processing

            _emailService.ProcessEmail(EmailType.NewOrderNotificationToAdmin, null, "Your Order", "Message Body", true, null);
        }

        public IEnumerable<ShippingProvider> GetShippingProviders(bool isActive)
        {
            return _context.ShippingProviders.Where(s => s.Active == isActive).ToList();
        }

        public OrderListViewModel GetOrders(bool active, int page, int pageSize)
        {
            IQueryable<Order> orders = _context.Orders.Where(o => o.Active == active);

            int totalOrders = orders.Count();

            orders = _context.Orders.OrderBy(o => o.OrderId).Skip((page - 1) * pageSize).Take(pageSize);

            return new OrderListViewModel
            {
                Orders = orders.Include("OrderStatu").Include("ShippingProvider").Include("ShippingCountry")
                .Select(o => new OrderBriefInfo
                {
                    Id = o.OrderId,
                    UserId = o.UserId,
                    FullName = o.FullName,
                    OrderNumber = o.OrderNumber,
                    OrderStatus = o.OrderStatu.Name,
                    ShippingProvider = o.ShippingProvider.Name,
                    ShippingCountry = o.ShippingCountry.Name,
                    Comments = o.Comments,
                    DatePlaced = o.DatePlaced,
                    DateShipped = o.DateShipped,
                    Total = o.Total,
                    Shipping = o.Shipping,
                    Tax = o.Tax,
                    Active = o.Active
                }).ToList(),
                TotalOrders = totalOrders
            };
        }

        public void Activate(int id)
        {
            ToggleActive(id, true);
        }

        public void Deactivate(int id)
        {
            ToggleActive(id, false);
        }

        public Order GetById(int id)
        {
            return _context.Orders.SingleOrDefault(o => o.OrderId == id);
        }

        public OrderEditViewModel GetOrderEditViewModel(int id)
        {
            var order = GetById(id);
            return _context.Orders
                .Where(o => o.OrderId == id)
                .Select(o => new OrderEditViewModel { Id = o.OrderId, UserId = o.UserId, FullName = o.FullName, OrderNumber = o.OrderNumber, OrderStatusId = o.OrderStatusId, ShippingProviderId = o.ShippingProviderId, ShippingNumber = o.ShippingNumber, BillingAddress1 = o.BillingAddress1, BillingAddress2 = o.BillingAddress2, BillingCity = o.BillingCity, BillingState = o.BillingState.Name, BillingProvince = o.BillingProvince.Name, BillingCountry = o.BillingCountry.Name, ShippingAddress1 = o.ShippingAddress1, ShippingAddress2 = o.ShippingAddress2, ShippingCity = o.ShippingCity, ShippingState = o.ShippingState.Name, ShippingProvince = o.ShippingProvince.Name, ShippingCountry = o.ShippingCountry.Name, ShippingZipcode = o.ShippingZipcode, Comments = o.Comments, DatePlaced = o.DatePlaced, DateShipped = o.DateShipped, Total = o.Total, Shipping = o.Shipping, Tax = o.Tax, Active = o.Active })
                .FirstOrDefault();
        }

        public CRUDStatus Update(OrderSaveModel orderSaveModel)
        {
            var order = GetById(orderSaveModel.Id);
            if (order == null)
            {
                return CRUDStatus.NotFound;
            }

            order.OrderStatusId = orderSaveModel.OrderStatusId;
            order.ShippingProviderId = orderSaveModel.ShippingProviderId;
            order.Active = orderSaveModel.Active;

            _context.Orders.Update(order);
            _context.SaveChanges();

            return CRUDStatus.Successful;
        }

        public IEnumerable<OrderStatus> GetOrderStatuses(bool isActive)
        {
            return _context.OrderStatus.Where(s => s.Active == isActive).ToList();
        }

        private int GetShippingProviderId(ShippingProviderEnum provider)
        {
            var shippingProviders = GetShippingProviders(true); 
            return shippingProviders.Where(s => s.Name == Util.ReplaceUnderscoreWithSpace(provider)).Select(s => s.ShippingProviderId).FirstOrDefault();
        }

        private void ToggleActive(int id, bool active)
        {
            var order = GetById(id);
            order.Active = active;

            _context.Orders.Update(order);
            _context.SaveChanges();
        }

        private void AddOrder(Cart cart, CheckoutDetails checkoutDetails)
        {
            var order = new Order
            {
                FullName = checkoutDetails.PaymentInformation.BillingAdress.FullName,
                OrderNumber = Guid.NewGuid().ToString(),
                OrderDate = DateTime.Now,
                OrderStatusId = GetOrderStatusId(OrderStatusEnum.Accepted),
                ShippingProviderId = GetShippingProviderId(ShippingProviderEnum.USPS_Ground), //TODO: can NOT hard code here
                ShippingNumber = "Fake Number", //TODO: fix this
                BillingAddress1 = checkoutDetails.PaymentInformation.BillingAdress.Address1,
                BillingAddress2 = checkoutDetails.PaymentInformation.BillingAdress.Address2,
                BillingCity = checkoutDetails.PaymentInformation.BillingAdress.City,
                BillingStateId = (checkoutDetails.PaymentInformation.BillingAdress.StateId > 0) ? checkoutDetails.PaymentInformation.BillingAdress.StateId : default(int?),
                BillingProvinceId = (checkoutDetails.PaymentInformation.BillingAdress.ProvinceId > 0) ? checkoutDetails.PaymentInformation.BillingAdress.ProvinceId : default(int?),
                BillingCountryId = checkoutDetails.PaymentInformation.BillingAdress.CountryId,
                BillingZipcode = checkoutDetails.PaymentInformation.BillingAdress.Zip,
                ShippingAddress1 = checkoutDetails.ShippingDetails.ShippingAddress.Address1,
                ShippingAddress2 = checkoutDetails.ShippingDetails.ShippingAddress.Address2,
                ShippingCity = checkoutDetails.ShippingDetails.ShippingAddress.City,
                ShippingStateId = (checkoutDetails.ShippingDetails.ShippingAddress.StateId > 0) ? checkoutDetails.ShippingDetails.ShippingAddress.StateId : default(int?),
                ShippingProvinceId = (checkoutDetails.ShippingDetails.ShippingAddress.ProvinceId > 0) ? checkoutDetails.ShippingDetails.ShippingAddress.ProvinceId : default(int?),
                ShippingCountryId = checkoutDetails.ShippingDetails.ShippingAddress.CountryId,
                ShippingZipcode = checkoutDetails.ShippingDetails.ShippingAddress.Zip,
                Comments = "",
                DatePlaced = DateTime.Now,
                Total = cart.ComputeOrderTotal(),
                Shipping = 2.5m, //TODO: fix this
                Tax = 3.0m,  //TODO: fix this
                Active = true
            };

            _context.Orders.Add(order);
            _context.SaveChanges();
        }

        private int GetOrderStatusId(OrderStatusEnum status)
        {
            var orderStatuses = GetOrderStatuses(true);
            return orderStatuses.Where(s => s.Name == status.ToString()).Select(s => s.OrderStatusId).FirstOrDefault();
        }

    }
}
