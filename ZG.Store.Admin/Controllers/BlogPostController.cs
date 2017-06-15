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
    //[Authorize("Bearer")]
    [Route("api/[controller]")]
    public class BlogPostController : Controller
    {
        private readonly IBlogPostService _blogPostService;
        private IHostingEnvironment _hostingEnv;

        public BlogPostController(IBlogPostService blogPostService, IHostingEnvironment hostingEnv)
        {
            _blogPostService = blogPostService;
            _hostingEnv = hostingEnv;
        }
        
        [HttpGet("{id}", Name = "GetBlogPost")]
        public IActionResult GetBlogPostById(int id)
        {
            var post = _blogPostService.GetById(id);

            if (post == null)
            {
                return NotFound();
            }

            var postDto = PostDto.Get(post);

            return new ObjectResult(postDto);
        }

        [HttpPost]
        [ValidateModel]
        public IActionResult Create([FromBody] PostDto postDto)
        {
            if (postDto == null)
            {
                return BadRequest();
            }

            var post = _blogPostService.Create(postDto);

            return CreatedAtRoute("GetBlogPost", new { id = post.PostId }, post);
        }

        [HttpPut("{id}")]
        [ValidateModel]
        public IActionResult Update(int id, [FromBody] PostDto postDto)
        {
            if (postDto == null || postDto.PostId != id)
            {
                return BadRequest();
            }

            var result = _blogPostService.Update(id, postDto);
            if (result == CRUDStatus.NotFound)
            {
                return NotFound();
            }

            return new NoContentResult();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var result = _blogPostService.Delete(id);
            if (result == CRUDStatus.NotFound)
            {
                return NotFound();
            }

            return new NoContentResult();
        }
    }
}
