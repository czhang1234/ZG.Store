using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

using ZG.Store.Services;
using ZG.Store.Common;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Hosting;
using System.IO;
using ZG.Store.Domain.Models;
using ZG.Store.Admin.CustomActionfilters;
using ZG.Store.Domain.DTO;

namespace ZG.Store.Admin.Controllers
{
    [Authorize("Bearer")]
    [Route("api/[controller]")]
    public class ProductSearchController : Controller
    {
        private readonly IProductSearchService _prodSearchService;

        public ProductSearchController(IProductSearchService prodSearchService)
        {
            _prodSearchService = prodSearchService;
        }
        
        [HttpPost]
        public IActionResult Search([FromBody] SearchTerms terms)
        {
            var products = _prodSearchService.Search(terms.Terms);

            var productDtos = products.Select(p => ProductDto.Get(p)).ToList();

            return new ObjectResult(productDtos);
        }
    }

    
}
