using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;

namespace ZG.Store.Domain.Models
{
    public class BloggingContext : DbContext
    {
        public BloggingContext(DbContextOptions<BloggingContext> options)
            : base(options)
        { }

        public DbSet<Blog> Blogs { get; set; }
        public DbSet<Post> Posts { get; set; }
    }

    public class BloggingContextFactory : IDbContextFactory<BloggingContext>
    {
        public BloggingContext Create(DbContextFactoryOptions options)
        {
            var builder = new DbContextOptionsBuilder<BloggingContext>();
            builder.UseSqlServer("Server=LAPTOP-Q3UKFVOU\\ZXSQLSERVER2;Database=ZGStore;User Id=sa;Password=zzc2009!;MultipleActiveResultSets=true");

            return new BloggingContext(builder.Options);
        }
    }
}
