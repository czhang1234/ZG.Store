using System;
using System.Collections.Generic;
using System.Text;
using ZG.Store.Common;
using ZG.Store.Domain.Models;

namespace ZG.Store.Domain.DTO
{
    public class PostDto
    {
        public int PostId { get; set; }
        public string Title { get; set; }
        public string Content { get; set; }

        public PostStatus Status { get; set; }
        public PostVisibility Visibility { get; set; }
        public bool AllowComments { get; set; }
        public int Likes { get; set; }

        public int BlogId { get; set; }

        public static PostDto Get(Post post)
        {
            return new PostDto()
            {
                PostId = post.PostId,
                BlogId = post.BlogId,
                Title = post.Title,
                Content = post.Content,
                Status = post.Status,
                Visibility = post.Visibility,
                AllowComments = post.AllowComments,
                Likes = post.Likes
            };
        }
    }
}
