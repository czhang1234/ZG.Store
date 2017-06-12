using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;
using ZG.Store.Domain.Models;
using ZG.Store.Common;
using ZG.Store.Domain.DTO;

namespace ZG.Store.Services
{
    public interface IBlogService
    {
        List<Blog> GetAll();
        Blog GetById(int id);
        Blog Create(BlogDto blog);
        CRUDStatus Update(int id, BlogDto blog);
        CRUDStatus Delete(int id);
    }

    public class BlogService : IBlogService
    {
        private readonly StoreContext _context;

        public BlogService(StoreContext context)
        {
            _context = context;
        }

        public List<Blog> GetAll()
        {
            return _context.Blogs.ToList();
        }

         public Blog GetById(int id)
        {
            return _context.Blogs.FirstOrDefault(b => b.BlogId == id);
        }

        public Blog Create(BlogDto blogDto)
        {
            var blog = new Blog { Url = blogDto.Url };
            _context.Blogs.Add(blog);
            _context.SaveChanges();

            return blog;
        }

        public CRUDStatus Update(int id, BlogDto blog)
        {
            var blogInDb = _context.Blogs.FirstOrDefault(b => b.BlogId == id);
            if (blogInDb == null)
            {
                return CRUDStatus.NotFound;
            }

            blogInDb.Url = blog.Url;

            _context.Blogs.Update(blogInDb);
            _context.SaveChanges();

            return CRUDStatus.Successful;
        }

        public CRUDStatus Delete(int id)
        {
            var blog = _context.Blogs.FirstOrDefault(b => b.BlogId == id);
            if (blog == null)
            {
                return CRUDStatus.NotFound;
            }

            _context.Blogs.Remove(blog);
            _context.SaveChanges();

            return CRUDStatus.Successful;
        }
    }
}
