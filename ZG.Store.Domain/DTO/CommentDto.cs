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
    }
}
