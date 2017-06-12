using System;
using System.Collections.Generic;
using System.Text;
using ZG.Store.Domain.DTO;
using ZG.Store.Domain.Models;
using System.Linq;

namespace ZG.Store.Services
{
    public interface IShippingProviderService
    {
        List<ShippingProviderEditViewModel> GetShippingProviders(bool? active);
        ShippingProvider GetShippingProviderById(int id);
        void Upsert(List<ShippingProviderEditViewModel> shippingProviders);
        List<IdName> GetShippingProviderIdNames(bool active);
    }

    public class ShippingProviderService : IShippingProviderService
    {
        private readonly OrderContext _context;

        public ShippingProviderService(OrderContext context)
        {
            _context = context;
        }

        public List<ShippingProviderEditViewModel> GetShippingProviders(bool? active)
        {
            return _context.ShippingProviders.Where(s => s.Active == active).Select(p => new ShippingProviderEditViewModel { Id = p.ShippingProviderId, Name = p.Name, ShippingCost = p.ShippingCost, Active = p.Active }).ToList();
        }

        public ShippingProvider GetShippingProviderById(int id)
        {
            return _context.ShippingProviders.SingleOrDefault(s => s.ShippingProviderId == id);
        }

        public void Upsert(List<ShippingProviderEditViewModel> shippingProviders)
        {
            shippingProviders.ForEach(p => Upsert(p));

            _context.SaveChanges();
        }

        public List<IdName> GetShippingProviderIdNames(bool active)
        {
            return _context.ShippingProviders.Where(s => s.Active == active)
                                       .Select(s => new IdName { Id = s.ShippingProviderId, Name = s.Name }).ToList();
        }

        private void Upsert(ShippingProviderEditViewModel shippingProvider)
        {
            if (shippingProvider.Id > 0)
            {
                Update(shippingProvider);
            }
            else
            {
                Create(shippingProvider);
            }
        }

        private void Update(ShippingProviderEditViewModel shippingProvider)
        {
            var sp = GetShippingProviderById(shippingProvider.Id);

            if (sp != null)
            {
                sp.Name = shippingProvider.Name;
                sp.ShippingCost = shippingProvider.ShippingCost;
                sp.Active = shippingProvider.Active;
            }
        }

        private void Create(ShippingProviderEditViewModel shippingProvider)
        {
            var sp = new ShippingProvider()
            {
                Name = shippingProvider.Name,
                ShippingCost = shippingProvider.ShippingCost,
                Active = shippingProvider.Active
            };

            _context.ShippingProviders.Add(sp);
        }
    }
}
