using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ZG.Store.Services.Models;
using ZG.Store.Services.Services;
using ZG.Store.Common;
using Microsoft.AspNetCore.Authorization;

namespace ZG.Store.Admin.Controllers
{
    [Authorize("Bearer")]
    [Route("api/[controller]")]
    public class ProductController : Controller
    {
        private readonly IProductService _prodService;

        public ProductController(IProductService prodCatservice)
        {
            _prodService = prodCatservice;
        }

        [HttpGet]
        public IEnumerable<Product> GetAll(int id)
        {
            return _prodService.GetAll(id);
        }

        [HttpGet("{id}", Name = "GetProduct")]
        public IActionResult GetProductById(long id)
        {
            var product = _prodService.GetById(id);

            if (product == null)
            {
                return NotFound();
            }

            return new ObjectResult(product);
        }

        [HttpPost]
        public IActionResult Create([FromBody] Product product)
        {
            if (product == null)
            {
                return BadRequest();
            }

            product = _prodService.Create(product);

            return CreatedAtRoute("GetProduct", new { id = product.ProductId }, product);
        }

        [HttpPut("{id}")]
        public IActionResult Update(long id, [FromBody] Product product)
        {
            if (product == null || product.ProductId != id)
            {
                return BadRequest();
            }

            var result = _prodService.Update(id, product);
            if (result == CRUDStatus.NotFound)
            {
                return NotFound();
            }

            return new NoContentResult();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(long id)
        {
            var result = _prodService.Delete(id);
            if (result == CRUDStatus.NotFound)
            {
                return NotFound();
            }

            return new NoContentResult();
        }
    }
}
