using System;
using System.Collections.Generic;
using System.Text;

namespace ZG.Store.Domain.Models
{
    public class Blog
    {
        public int BlogId { get; set; }
        public string Url { get; set; }

        public List<Post> Posts { get; set; }
    }
}
