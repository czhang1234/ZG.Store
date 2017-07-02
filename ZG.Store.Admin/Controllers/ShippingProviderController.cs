using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

using ZG.Store.Services;
using ZG.Store.Common;
using Microsoft.AspNetCore.Authorization;
using ZG.Store.Domain.Models;
using ZG.Store.Domain.DTO;

namespace ZG.Store.Admin.Controllers
{
    [Authorize("Bearer")]
    [Route("api/[controller]")]
    public class ShippingProviderController : Controller
    {
        private readonly IShippingProviderService _shippingProviderService;

        public ShippingProviderController(IShippingProviderService shippingProviderService)
        {
            _shippingProviderService = shippingProviderService;
        }

        [HttpGet]
        public IEnumerable<IdName> GetAll()
        {
            return _shippingProviderService.GetIdName(true);
        }
    }
}
