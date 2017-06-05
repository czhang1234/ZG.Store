using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ZG.Store.Services.Models;

namespace ZG.Store.Admin.Controllers
{
    [Route("api/[controller]")]
    public class BlogController : Controller
    {
        private readonly StoreContext _store;

        public BlogController(StoreContext storeContext)
        {
            _store = storeContext;
        }

        [HttpGet]
        public IEnumerable<Blog> GetAllBlogs()
        {
            return _store.Blogs.ToList();
        }

        [HttpGet("{id}", Name = "GetBlog")]
        public IActionResult GetBlogById(long id)
        {
            var blog = _store.Blogs.FirstOrDefault(b => b.BlogId == id);

            if (blog == null)
            {
                return NotFound();
            }

            return new ObjectResult(blog);
        }

        [HttpPost]
        public IActionResult Create([FromBody] Blog blog)
        {
            if (blog == null)
            {
                return BadRequest();
            }

            _store.Blogs.Add(blog);
            _store.SaveChanges();

            return CreatedAtRoute("GetBlog", new { id = blog.BlogId }, blog);
        }

        [HttpPut("{id}")]
        public IActionResult Update(long id, [FromBody] Blog blogItem)
        {
            if (blogItem == null || blogItem.BlogId != id)
            {
                return BadRequest();
            }

            var blog = _store.Blogs.FirstOrDefault(b => b.BlogId == id);
            if (blog == null)
            {
                return NotFound();
            }

            blog.Url = blogItem.Url;
            blog.Posts = blogItem.Posts;

            _store.Blogs.Update(blog);
            _store.SaveChanges();

            return new NoContentResult();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(long id)
        {
            var blog = _store.Blogs.FirstOrDefault(b => b.BlogId == id);
            if(blog == null)
            {
                return NotFound();
            }

            _store.Blogs.Remove(blog);
            _store.SaveChanges();

            return new NoContentResult();
        }



    }
}
