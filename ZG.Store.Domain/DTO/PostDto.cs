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

        public int BlogId { get; set; }
    }
}
