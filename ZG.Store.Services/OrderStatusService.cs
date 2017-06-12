using System;
using System.Collections.Generic;
using System.Text;
using ZG.Store.Domain.DTO;
using ZG.Store.Domain.Models;
using System.Linq;

namespace ZG.Store.Services
{
    public interface IOrderStatusService
    {
        List<IdName> GetStatusIdName(bool isActive);
        IEnumerable<OrderStatus> GetOrderStatuses(bool isActive);
    }

    public class OrderStatusService : IOrderStatusService
    {
        private readonly StoreContext _context;

        public OrderStatusService(StoreContext context)
        {
            _context = context;
        }

        public List<IdName> GetStatusIdName(bool isActive)
        {
            return _context.OrderStatus.Where(s => s.Active == isActive).Select(s => new IdName { Id = s.OrderStatusId, Name = s.Name }).ToList();
        }

        public IEnumerable<OrderStatus> GetOrderStatuses(bool isActive)
        {
            return _context.OrderStatus.Where(s => s.Active == isActive).ToList();
        }
    }
}
