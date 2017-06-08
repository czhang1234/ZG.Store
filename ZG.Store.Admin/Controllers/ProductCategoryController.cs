﻿using System;
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
    public class ProductCategoryController : Controller
    {
        private readonly IProductCatetoryService _prodCatservice;

        public ProductCategoryController(IProductCatetoryService prodCatservice)
        {
            _prodCatservice = prodCatservice;
        }

        [HttpGet]
        public IEnumerable<ProductCategory> GetAll()
        {
            return _prodCatservice.GetAll();
        }

        [HttpGet("{id}", Name = "GetProductCategory")]
        public IActionResult GetProductCategoryById(long id)
        {
            var category = _prodCatservice.GetProductCategoryById(id);

            if (category == null)
            {
                return NotFound();
            }

            return new ObjectResult(category);
        }

        [HttpPost]
        public IActionResult Create([FromBody] ProductCategory category)
        {
            if (category == null)
            {
                return BadRequest();
            }

            category = _prodCatservice.CreateProductCategory(category);

            return CreatedAtRoute("GetProductCategory", new { id = category.ProductCategoryId }, category);
        }

        [HttpPut("{id}")]
        public IActionResult Update(long id, [FromBody] ProductCategory category)
        {
            if (category == null || category.ProductCategoryId != id)
            {
                return BadRequest();
            }

            var result = _prodCatservice.UpdateProductCategory(id, category);
            if (result == CRUDStatus.NotFound)
            {
                return NotFound();
            }

            return new NoContentResult();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(long id)
        {
            var result = _prodCatservice.DeleteProductCategory(id);
            if (result == CRUDStatus.NotFound)
            {
                return NotFound();
            }

            return new NoContentResult();
        }
    }
}
