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
    public interface IProvinceService
    {
        List<IdName> GetProvinceIdName(bool isActive);
    }

    public class ProvinceService : IProvinceService
    {
        private readonly StoreContext _context;

        public ProvinceService(StoreContext context)
        {
            _context = context;
        }

        public List<IdName> GetProvinceIdName(bool isActive)
        {
            return _context.Provinces.Where(p => p.Active == isActive).Select(p => new IdName { Id = p.ProvinceId, Name = p.Name }).ToList();
        }
    }
}
