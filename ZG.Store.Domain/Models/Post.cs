using System;
using System.Collections.Generic;
using System.Text;
using ZG.Store.Common;

namespace ZG.Store.Domain.Models
{
    public class Post
    {
        public int PostId { get; set; }
        public string Title { get; set; }
        public string Content { get; set; }

        public PostStatus Status { get; set; }
        public PostVisibility Visibility { get; set; }
        public bool AllowComments { get; set; }

        public int BlogId { get; set; }
        public Blog Blog { get; set; }

        public List<Comment> Comments { get; set; }
    }

    public enum PostVisibility
    {
        Public,
        PasswordProtected,
        Private
    }
}
