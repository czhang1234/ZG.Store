using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;

namespace ZG.Store.Services.Models
{
    public class StoreContext : DbContext
    {
        public StoreContext(DbContextOptions<StoreContext> options)
            : base(options)
        { }

        public DbSet<Blog> Blogs { get; set; }
        public DbSet<Post> Posts { get; set; }
    }

    public class StoreContextFactory : IDbContextFactory<StoreContext>
    {
        public StoreContext Create(DbContextFactoryOptions options)
        {
            var builder = new DbContextOptionsBuilder<StoreContext>();
            builder.UseSqlServer("Server=LAPTOP-Q3UKFVOU\\ZXSQLSERVER2;Database=ZGStore;User Id=sa;Password=zzc2009!;MultipleActiveResultSets=true");

            return new StoreContext(builder.Options);
        }
    }
}
