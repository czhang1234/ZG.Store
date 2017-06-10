using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ZG.Store.Services.Models;
using ZG.Store.Services.Services;
using ZG.Store.Common;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Hosting;
using System.IO;

namespace ZG.Store.Admin.Controllers
{
    [Authorize("Bearer")]
    [Route("api/[controller]")]
    public class ProductController : Controller
    {
        private readonly IProductService _prodService;
        private readonly IProductImageService _prodImgService;
        private IHostingEnvironment _hostingEnv;

        public ProductController(IProductService prodCatservice, IProductImageService prodImgService, IHostingEnvironment hostingEnv)
        {
            _prodService = prodCatservice;
            _prodImgService = prodImgService;
            _hostingEnv = hostingEnv;
        }

        [AllowAnonymous]
        [HttpGet("{id}", Name = "GetProduct")]
        public IActionResult GetProductById(long id)
        {
            var product = _prodService.GetById(id);

            if (product == null)
            {
                return NotFound();
            }

            var productDto = ProductDto.Get(product);

            return new ObjectResult(productDto);
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

        [HttpPost("{id}")]
        public IActionResult UploadFiles(int id)
        {
            var product = _prodService.GetById(id);

            var uploadedFiles = new List<UploadedFile>();

            for (int i = 0; i < Request.Form.Files.Count; i++)
            {
                var file= Request.Form.Files[i];
                var dir = GetProductImageDir(id); 

                if(!Directory.Exists(dir))
                {
                    Directory.CreateDirectory(dir);
                }

                var fileFullName = dir + $@"\{file.FileName}";
                using (var fs = System.IO.File.Create(fileFullName))
                {
                    file.CopyTo(fs);
                    fs.Flush();
                }

                var img = _prodImgService.Create(new ProductImage { FileName = file.FileName, ProductId = id });
                uploadedFiles.Add(new UploadedFile() {Id = img.ProductImageId, FileName = file.FileName });
            }

            return new ObjectResult(uploadedFiles);
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

        [HttpDelete("images/{id}")]
        public IActionResult DeleteImage(long id)
        {
            var img = _prodImgService.GetById(id);
            if(img == null)
            {
                return NotFound();
            }

            var dir = GetProductImageDir(img.ProductId);
            var fileFullName = dir + $@"\{img.FileName}";
            System.IO.File.Delete(fileFullName);

            _prodImgService.Delete(id);

            return new NoContentResult();
        }

        private string GetProductImageDir(long productId)
        {
            return _hostingEnv.ContentRootPath + $@"\wwwroot\product-images\{productId}";
        }
    }

    public class UploadedFile
    {
        public int Id { get; set; }
        public string FileName { get; set; }
    }
}
