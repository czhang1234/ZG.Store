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
    //[Authorize("Bearer")]
    [Route("api/[controller]")]
    public class BlogPostsController : Controller
    {
        private readonly IBlogPostService _blogPostService;

        public BlogPostsController(IBlogPostService blogPostService)
        {
            _blogPostService = blogPostService;
        }

        [HttpGet("{id}")]
        public IEnumerable<PostDto> GetAll(int id)
        {
            var posts = _blogPostService.GetAll(id);

            return posts.Select(p => PostDto.Get(p));
        }
    }
}
