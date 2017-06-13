using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using ZG.Store.Common;
using ZG.Store.Domain.DTO;
using ZG.Store.Domain.Models;

namespace ZG.Store.Services
{
    public interface IBlogPostService
    {
        IEnumerable<Post> GetAll(int blogId);
        Post GetById(int id);
        Post Create(PostDto post);
        CRUDStatus Update(int id, PostDto post);
        CRUDStatus Delete(int id);
    }

    public class BlogPostService : IBlogPostService
    {
        private readonly StoreContext _context;

        public BlogPostService(StoreContext context)
        {
            _context = context;
        }

        public IEnumerable<Post> GetAll(int blogId)
        {
            return _context.Posts.Where(b => b.BlogId == blogId).ToList();
        }

        public Post GetById(int id)
        {
            var post = _context.Posts.FirstOrDefault(p => p.PostId == id);
            _context.Entry(post).Collection(p => p.Comments).Load();

            return post;
        }

        public Post Create(PostDto postDto)
        {
            var post = new Post()
            {
                Title = postDto.Title,
                Content = postDto.Content,
                Status = postDto.Status,
                Visibility = postDto.Visibility,
                AllowComments = postDto.AllowComments,
                BlogId = postDto.BlogId
            };

            _context.Posts.Add(post);
            _context.SaveChanges();

            return post;
        }

        public CRUDStatus Update(int id, PostDto post)
        {
            var postInDb = _context.Posts.FirstOrDefault(p => p.PostId == id);
            if (postInDb == null)
            {
                return CRUDStatus.NotFound;
            }

            postInDb.Title = post.Title;
            postInDb.Content = post.Content;
            postInDb.Status = post.Status;
            postInDb.Visibility = post.Visibility;
            postInDb.AllowComments = post.AllowComments;
            postInDb.BlogId = post.BlogId;
            postInDb.Likes = post.Likes;

            _context.Posts.Update(postInDb);
            _context.SaveChanges();

            return CRUDStatus.Successful;
        }

        public CRUDStatus Delete(int id)
        {
            var post = _context.Posts.FirstOrDefault(p => p.PostId == id);
            if (post == null)
            {
                return CRUDStatus.NotFound;
            }

            _context.Posts.Remove(post);
            _context.SaveChanges();

            return CRUDStatus.Successful;
        }
    }
}
