using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

using ZG.Store.Services;
using ZG.Store.Common;
using Microsoft.AspNetCore.Authorization;
using ZG.Store.Domain.Models;
using ZG.Store.Admin.CustomActionfilters;
using ZG.Store.Domain.DTO;

namespace ZG.Store.Admin.Controllers
{
    //[Authorize("Bearer")]
    [Route("api/[controller]")]
    public class BlogController : Controller
    {
        private readonly IBlogService _blogService;

        public BlogController(IBlogService blogService)
        {
            _blogService = blogService;
        }

        [HttpGet]
        public IEnumerable<Blog> GetAll()
        {
            return _blogService.GetAll();
        }

        [HttpGet("{id}", Name = "GetBlog")]
        public IActionResult GetBlogById(int id)
        {
            var blog = _blogService.GetById(id);

            if (blog == null)
            {
                return NotFound();
            }

            return new ObjectResult(blog);
        }

        [HttpPost]
        [ValidateModel]
        public IActionResult Create([FromBody] BlogDto blogDto)
        {
            if (blogDto == null)
            {
                return BadRequest();
            }

            var blog = _blogService.Create(blogDto);

            return CreatedAtRoute("GetBlog", new { id = blog.BlogId }, blog);
        }

        [HttpPut("{id}")]
        [ValidateModel]
        public IActionResult Update(int id, [FromBody] BlogDto blogDto)
        {
            if (blogDto == null || blogDto.BlogId != id)
            {
                return BadRequest();
            }

            var result = _blogService.Update(id, blogDto);
            if (result == CRUDStatus.NotFound)
            {
                return NotFound();
            }

            return new NoContentResult();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var result = _blogService.Delete(id);
            if (result == CRUDStatus.NotFound)
            {
                return NotFound();
            }

            return new NoContentResult();
        }
    }
}
