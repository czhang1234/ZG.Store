using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;

namespace ZG.Store.Services.Models
{
    public class UserContext : DbContext
    {
        public UserContext(DbContextOptions<UserContext> options)
            : base(options)
        { }
        
        public DbSet<User> Users { get; set; }
        public DbSet<Admin> Admins { get; set; }
    }

    public class UserContextFactory : IDbContextFactory<UserContext>
    {
        public UserContext Create(DbContextFactoryOptions options)
        {
            var builder = new DbContextOptionsBuilder<UserContext>();
            builder.UseSqlServer("Server=LAPTOP-Q3UKFVOU\\ZXSQLSERVER2;Database=ZGStore;User Id=sa;Password=zzc2009!;MultipleActiveResultSets=true");

            return new UserContext(builder.Options);
        }
    }
}
