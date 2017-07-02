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
    public interface ICountryService
    {
        List<IdName> GetCountryIdName(bool isActive);
    }

    public class CountryService : ICountryService
    {
        private readonly StoreContext _context;

        public CountryService(StoreContext context)
        {
            _context = context;
        }

        public List<IdName> GetCountryIdName(bool isActive)
        {
            return _context.Countries.Where(c => c.Active == isActive).Select(c => new IdName { Id = c.CountryId, Name = c.Name }).ToList();
        }
    }
}
