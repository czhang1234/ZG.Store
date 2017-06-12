using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

using ZG.Store.Services;
using ZG.Store.Common;
using Microsoft.AspNetCore.Authorization;
using ZG.Store.Domain.Models;

namespace ZG.Store.Admin.Controllers
{
    [Authorize("Bearer")]
    [Route("api/[controller]")]
    public class ProductsController : Controller
    {
        private readonly IProductService _prodService;

        public ProductsController(IProductService prodCatservice)
        {
            _prodService = prodCatservice;
        }

        [HttpGet("{id}")]
        public IEnumerable<Product> GetAll(int id)
        {
            return _prodService.GetAll(id);
        }
    }
}
