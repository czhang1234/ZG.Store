using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;

namespace ZG.Store.Domain.Models
{
    public class OrderContext : DbContext
    {
        public OrderContext(DbContextOptions<OrderContext> options)
            : base(options)
        { }

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

        //This is to fix the error "Introducing FOREIGN KEY constraint 'FK_dbo.xxxxxxxx' on table 'Orders' may cause cycles or multiple cascade paths. Specify ON DELETE NO ACTION or ON UPDATE NO ACTION, or modify other FOREIGN KEY constraints."
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
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

    public class OrderContextFactory : IDbContextFactory<OrderContext>
    {
        public OrderContext Create(DbContextFactoryOptions options)
        {
            var builder = new DbContextOptionsBuilder<OrderContext>();
            builder.UseSqlServer("Server=LAPTOP-Q3UKFVOU\\ZXSQLSERVER2;Database=ZGStore;User Id=sa;Password=zzc2009!;MultipleActiveResultSets=true");

            return new OrderContext(builder.Options);
        }
    }
}
