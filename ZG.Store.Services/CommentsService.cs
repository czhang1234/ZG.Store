using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using ZG.Store.Common;
using ZG.Store.Domain.DTO;
using ZG.Store.Domain.Models;

namespace ZG.Store.Services
{
    public interface ICommentsService
    {
        IEnumerable<Comment> GetAll(int postId);
        Comment GetById(int id);
        Comment Create(CommentDto commentDto);
        CRUDStatus Update(int id, CommentDto commentDto);
        CRUDStatus Delete(int id);
    }

    public class CommentsService : ICommentsService
    {
        private readonly StoreContext _context;

        public CommentsService(StoreContext context)
        {
            _context = context;
        }

        public IEnumerable<Comment> GetAll(int postId)
        {
            return _context.Comments.Where(b => b.PostId == postId).ToList();
        }

        public Comment GetById(int id)
        {
            var comment = _context.Comments.FirstOrDefault(c => c.CommentId == id);

            return comment;
        }

        public Comment Create(CommentDto commentDto)
        {
            var comment = new Comment()
            {
                Content = commentDto.Content,
                DateTime = commentDto.DateTime,
                PostId = commentDto.PostId,
                UserId = commentDto.UserId,
                Visibility = commentDto.Visibility
            };

            _context.Comments.Add(comment);
            _context.SaveChanges();

            return comment;
        }

        public CRUDStatus Update(int id, CommentDto commentDto)
        {
            var commentInDb = _context.Comments.FirstOrDefault(c => c.CommentId == id);
            if (commentInDb == null)
            {
                return CRUDStatus.NotFound;
            }

            commentInDb.Content = commentDto.Content;
            commentInDb.DateTime = commentDto.DateTime;
            commentInDb.PostId = commentDto.PostId;
            commentInDb.UserId = commentDto.UserId;
            commentInDb.Visibility = commentDto.Visibility;

            _context.Comments.Update(commentInDb);
            _context.SaveChanges();

            return CRUDStatus.Successful;
        }

        public CRUDStatus Delete(int id)
        {
            var comment = _context.Comments.FirstOrDefault(c => c.CommentId == id);
            if (comment == null)
            {
                return CRUDStatus.NotFound;
            }

            _context.Comments.Remove(comment);
            _context.SaveChanges();

            return CRUDStatus.Successful;
        }
    }
}
