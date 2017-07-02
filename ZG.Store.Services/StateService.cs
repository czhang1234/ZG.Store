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
    public interface IStateService
    {
        List<IdName> GetStateIdName(bool isActive);
    }

    public class StateService : IStateService
    {
        private readonly StoreContext _context;

        public StateService(StoreContext context)
        {
            _context = context;
        }

        public List<IdName> GetStateIdName(bool isActive)
        {
            return _context.States.Where(s => s.Active == isActive).Select(s => new IdName { Id = s.StateId, Name = s.Name }).ToList();
        }
    }
}
