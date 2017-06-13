using System;
using System.Collections.Generic;
using System.Text;
using ZG.Store.Domain.Models;

namespace ZG.Store.Domain.DTO
{
    public class CommentDto
    {
        public int CommentId { get; set; }

        public string Content { get; set; }
        public DateTime DateTime { get; set; }

        public int PostId { get; set; }
        public CommentVisibility Visibility { get; set; }

        public int UserId { get; set; }

        public static CommentDto Get(Comment comment)
        {
            return new CommentDto()
            {
                CommentId = comment.CommentId,
                Content = comment.Content,
                DateTime = comment.DateTime,
                PostId = comment.PostId,
                Visibility = comment.Visibility,
                UserId = comment.UserId
            };
        }
    }
}
