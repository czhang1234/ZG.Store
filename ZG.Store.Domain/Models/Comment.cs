using System;
using System.Collections.Generic;
using System.Text;
using ZG.Store.Common;

namespace ZG.Store.Domain.Models
{
    public class Comment
    {
        public int CommentId { get; set; }

        public string Content { get; set; }
        public DateTime DateTime { get; set; }

        public int PostId { get; set; }
        public Post Post { get; set; }
        public CommentVisibility Visibility { get; set; }

        public int  UserId { get; set; }
        public User User { get; set; }
    }

    public enum CommentVisibility
    {
        Public,
        PasswordProtected,
        Private
    }
}
