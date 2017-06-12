using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;

namespace ZG.Store.Domain.Models
{
    public class StoreContext : DbContext
    {
        public StoreContext(DbContextOptions<StoreContext> options)
            : base(options)
        { }
        
        public DbSet<User> Users { get; set; }
        public DbSet<Admin> Admins { get; set; }

        public DbSet<ProductCategory> ProductCategories { get; set; }
        public DbSet<Product> Products { get; set; }
        public DbSet<ProductImage> ProductImages { get; set; }

        public DbSet<Order> Orders { get; set; }
        public DbSet<Country> Countries { get; set; }
        public DbSet<OrderProduct> OrderProducts { get; set; }
        public DbSet<OrderStatus> OrderStatus { get; set; }
        public DbSet<Province> Provinces { get; set; }
        public DbSet<Shipping> Shippings { get; set; }
        public DbSet<ShippingProvider> ShippingProviders { get; set; }
        public DbSet<State> States { get; set; }
        public DbSet<Tax> Tax { get; set; }
        public DbSet<Email> Emails { get; set; }

        public DbSet<Blog> Blogs { get; set; }
        public DbSet<Post> Posts { get; set; }
        public DbSet<Comment> Comments { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<ProductImage>().HasIndex(img => new { img.FileName }).IsUnique(true);

            modelBuilder.Entity<Country>()
                .HasMany(c => c.OrdersBilling)
                .WithOne(o => o.BillingCountry)
                .HasForeignKey(o => o.BillingCountryId).OnDelete(Microsoft.EntityFrameworkCore.Metadata.DeleteBehavior.Restrict);

            modelBuilder.Entity<Country>()
                .HasMany(c => c.OrdersShipping)
                .WithOne(o => o.ShippingCountry)
                .HasForeignKey(o => o.ShippingCountryId).OnDelete(Microsoft.EntityFrameworkCore.Metadata.DeleteBehavior.Restrict);

        }
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
