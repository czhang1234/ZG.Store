using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;

namespace ZG.Store.Services.Models
{
    public class ProductContext : DbContext
    {
        public ProductContext(DbContextOptions<ProductContext> options)
            : base(options)
        { }

        public DbSet<ProductCategory> ProductCategories { get; set; }
        public DbSet<Product> Products { get; set; }
        public DbSet<ProductImage> ProductImage { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<ProductImage>().HasIndex(img => new { img.FileName}).IsUnique(true);
        }
    }

    public class ProductContextFactory : IDbContextFactory<ProductContext>
    {
        public ProductContext Create(DbContextFactoryOptions options)
        {
            var builder = new DbContextOptionsBuilder<ProductContext>();
            builder.UseSqlServer("Server=LAPTOP-Q3UKFVOU\\ZXSQLSERVER2;Database=ZGStore;User Id=sa;Password=zzc2009!;MultipleActiveResultSets=true");

            return new ProductContext(builder.Options);
        }
    }
}
