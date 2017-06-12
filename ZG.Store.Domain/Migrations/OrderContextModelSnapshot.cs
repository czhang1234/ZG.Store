using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using ZG.Store.Domain.Models;

namespace ZG.Store.Services.Migrations
{
    [DbContext(typeof(OrderContext))]
    partial class OrderContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
            modelBuilder
                .HasAnnotation("ProductVersion", "1.1.2")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("ZG.Store.Domain.Models.Address", b =>
                {
                    b.Property<int>("AddressId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Address1")
                        .IsRequired()
                        .HasMaxLength(50);

                    b.Property<string>("Address2")
                        .HasMaxLength(50);

                    b.Property<string>("City")
                        .IsRequired()
                        .HasMaxLength(50);

                    b.Property<int>("CountryId");

                    b.Property<DateTime>("CreationDate");

                    b.Property<bool>("IsBilling");

                    b.Property<bool>("IsShipping");

                    b.Property<string>("Phone")
                        .IsRequired()
                        .HasMaxLength(50);

                    b.Property<int?>("ProvinceId");

                    b.Property<int?>("StateId");

                    b.Property<int>("UserId");

                    b.Property<Guid?>("UserId1");

                    b.Property<string>("Zipcode")
                        .IsRequired()
                        .HasMaxLength(50);

                    b.HasKey("AddressId");

                    b.HasIndex("CountryId");

                    b.HasIndex("ProvinceId");

                    b.HasIndex("StateId");

                    b.HasIndex("UserId1");

                    b.ToTable("Address");
                });

            modelBuilder.Entity("ZG.Store.Domain.Models.Country", b =>
                {
                    b.Property<int>("CountryId")
                        .ValueGeneratedOnAdd();

                    b.Property<bool>("Active");

                    b.Property<string>("Code")
                        .IsRequired()
                        .HasMaxLength(2);

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(50);

                    b.HasKey("CountryId");

                    b.ToTable("Countries");
                });

            modelBuilder.Entity("ZG.Store.Domain.Models.Email", b =>
                {
                    b.Property<int>("EmailId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Body")
                        .IsRequired();

                    b.Property<string>("Cc")
                        .HasMaxLength(250);

                    b.Property<DateTime>("CreationDate");

                    b.Property<string>("ExceptionMessage")
                        .HasMaxLength(300);

                    b.Property<string>("FromAddress")
                        .IsRequired()
                        .HasMaxLength(50);

                    b.Property<string>("FromName")
                        .HasMaxLength(50);

                    b.Property<bool>("IsBodyHtml");

                    b.Property<int?>("OrderId");

                    b.Property<string>("Status")
                        .IsRequired()
                        .HasMaxLength(20);

                    b.Property<string>("Subject")
                        .IsRequired()
                        .HasMaxLength(200);

                    b.Property<string>("ToAddress")
                        .IsRequired()
                        .HasMaxLength(50);

                    b.Property<string>("ToName")
                        .HasMaxLength(50);

                    b.Property<string>("Type")
                        .IsRequired()
                        .HasMaxLength(50);

                    b.HasKey("EmailId");

                    b.HasIndex("OrderId");

                    b.ToTable("Emails");
                });

            modelBuilder.Entity("ZG.Store.Domain.Models.Order", b =>
                {
                    b.Property<int>("OrderId")
                        .ValueGeneratedOnAdd();

                    b.Property<bool>("Active");

                    b.Property<string>("BillingAddress1")
                        .IsRequired()
                        .HasMaxLength(50);

                    b.Property<string>("BillingAddress2")
                        .HasMaxLength(50);

                    b.Property<string>("BillingCity")
                        .IsRequired()
                        .HasMaxLength(50);

                    b.Property<int>("BillingCountryId");

                    b.Property<int?>("BillingProvinceId");

                    b.Property<int?>("BillingStateId");

                    b.Property<string>("BillingZipcode")
                        .IsRequired()
                        .HasMaxLength(50);

                    b.Property<string>("Comments")
                        .HasMaxLength(400);

                    b.Property<DateTime>("DatePlaced");

                    b.Property<DateTime?>("DateShipped");

                    b.Property<string>("FullName")
                        .IsRequired()
                        .HasMaxLength(100);

                    b.Property<DateTime>("OrderDate");

                    b.Property<string>("OrderNumber")
                        .IsRequired()
                        .HasMaxLength(50);

                    b.Property<int>("OrderStatusId");

                    b.Property<decimal>("Shipping");

                    b.Property<string>("ShippingAddress1")
                        .IsRequired()
                        .HasMaxLength(50);

                    b.Property<string>("ShippingAddress2")
                        .HasMaxLength(50);

                    b.Property<string>("ShippingCity")
                        .IsRequired()
                        .HasMaxLength(50);

                    b.Property<int>("ShippingCountryId");

                    b.Property<string>("ShippingNumber")
                        .IsRequired()
                        .HasMaxLength(50);

                    b.Property<int>("ShippingProviderId");

                    b.Property<int?>("ShippingProvinceId");

                    b.Property<int?>("ShippingStateId");

                    b.Property<string>("ShippingZipcode")
                        .IsRequired()
                        .HasMaxLength(50);

                    b.Property<decimal>("Tax");

                    b.Property<decimal>("Total");

                    b.Property<Guid?>("UserId");

                    b.HasKey("OrderId");

                    b.HasIndex("BillingCountryId");

                    b.HasIndex("BillingProvinceId");

                    b.HasIndex("BillingStateId");

                    b.HasIndex("OrderStatusId");

                    b.HasIndex("ShippingCountryId");

                    b.HasIndex("ShippingProviderId");

                    b.HasIndex("ShippingProvinceId");

                    b.HasIndex("ShippingStateId");

                    b.HasIndex("UserId");

                    b.ToTable("Orders");
                });

            modelBuilder.Entity("ZG.Store.Domain.Models.OrderProduct", b =>
                {
                    b.Property<int>("OrderProductId")
                        .ValueGeneratedOnAdd();

                    b.Property<bool>("Active");

                    b.Property<decimal?>("Discount");

                    b.Property<string>("DownloadKey")
                        .HasMaxLength(50);

                    b.Property<string>("DownloadURL")
                        .HasMaxLength(400);

                    b.Property<DateTime>("OrderDate");

                    b.Property<int>("OrderId");

                    b.Property<decimal>("PricePerUnit");

                    b.Property<int>("ProductId");

                    b.Property<int>("Quantity");

                    b.Property<decimal>("Shipping");

                    b.Property<decimal>("TotalPrice");

                    b.HasKey("OrderProductId");

                    b.HasIndex("OrderId");

                    b.HasIndex("ProductId");

                    b.ToTable("OrderProducts");
                });

            modelBuilder.Entity("ZG.Store.Domain.Models.OrderStatus", b =>
                {
                    b.Property<int>("OrderStatusId")
                        .ValueGeneratedOnAdd();

                    b.Property<bool>("Active");

                    b.Property<int>("Code");

                    b.Property<string>("Name")
                        .HasMaxLength(50);

                    b.HasKey("OrderStatusId");

                    b.ToTable("OrderStatus");
                });

            modelBuilder.Entity("ZG.Store.Domain.Models.Product", b =>
                {
                    b.Property<int>("ProductId")
                        .ValueGeneratedOnAdd();

                    b.Property<bool>("Active");

                    b.Property<string>("Description")
                        .IsRequired();

                    b.Property<decimal>("Height");

                    b.Property<bool>("IsReviewEnabled");

                    b.Property<decimal>("Length");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(50);

                    b.Property<int>("ProductCategoryId");

                    b.Property<string>("ProductLink")
                        .HasMaxLength(400);

                    b.Property<decimal?>("RatingScore");

                    b.Property<decimal>("SalePrice");

                    b.Property<decimal>("ShippingHeight");

                    b.Property<decimal>("ShippingLength");

                    b.Property<decimal>("ShippingWeight");

                    b.Property<decimal>("ShippingWidth");

                    b.Property<int>("TotalReviewCount");

                    b.Property<decimal>("Weight");

                    b.Property<decimal>("Width");

                    b.HasKey("ProductId");

                    b.HasIndex("ProductCategoryId");

                    b.ToTable("Product");
                });

            modelBuilder.Entity("ZG.Store.Domain.Models.ProductCategory", b =>
                {
                    b.Property<int>("ProductCategoryId")
                        .ValueGeneratedOnAdd();

                    b.Property<bool>("Active");

                    b.Property<string>("CategoryName")
                        .IsRequired()
                        .HasMaxLength(50);

                    b.Property<int?>("ParentId");

                    b.HasKey("ProductCategoryId");

                    b.ToTable("ProductCategory");
                });

            modelBuilder.Entity("ZG.Store.Domain.Models.ProductImage", b =>
                {
                    b.Property<int>("ProductImageId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("FileName");

                    b.Property<int>("ProductId");

                    b.HasKey("ProductImageId");

                    b.HasIndex("ProductId");

                    b.ToTable("ProductImage");
                });

            modelBuilder.Entity("ZG.Store.Domain.Models.Province", b =>
                {
                    b.Property<int>("ProvinceId")
                        .ValueGeneratedOnAdd();

                    b.Property<bool>("Active");

                    b.Property<string>("Code")
                        .HasMaxLength(2);

                    b.Property<int>("CountryId");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(50);

                    b.HasKey("ProvinceId");

                    b.HasIndex("CountryId");

                    b.ToTable("Provinces");
                });

            modelBuilder.Entity("ZG.Store.Domain.Models.Shipping", b =>
                {
                    b.Property<int>("ShippingId")
                        .ValueGeneratedOnAdd();

                    b.Property<bool>("Active");

                    b.Property<string>("City");

                    b.Property<int>("CountryId");

                    b.Property<int>("ProductId");

                    b.Property<int?>("ProvinceId");

                    b.Property<decimal>("Rate");

                    b.Property<int>("ShippingProviderId");

                    b.Property<int?>("StateId");

                    b.HasKey("ShippingId");

                    b.HasIndex("CountryId");

                    b.HasIndex("ProductId");

                    b.HasIndex("ProvinceId");

                    b.HasIndex("ShippingProviderId");

                    b.HasIndex("StateId");

                    b.ToTable("Shippings");
                });

            modelBuilder.Entity("ZG.Store.Domain.Models.ShippingProvider", b =>
                {
                    b.Property<int>("ShippingProviderId")
                        .ValueGeneratedOnAdd();

                    b.Property<bool>("Active");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(50);

                    b.Property<decimal>("ShippingCost");

                    b.HasKey("ShippingProviderId");

                    b.ToTable("ShippingProviders");
                });

            modelBuilder.Entity("ZG.Store.Domain.Models.State", b =>
                {
                    b.Property<int>("StateId")
                        .ValueGeneratedOnAdd();

                    b.Property<bool?>("Active");

                    b.Property<string>("Code")
                        .IsRequired()
                        .HasMaxLength(2);

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(50);

                    b.HasKey("StateId");

                    b.ToTable("States");
                });

            modelBuilder.Entity("ZG.Store.Domain.Models.Tax", b =>
                {
                    b.Property<int>("TaxId")
                        .ValueGeneratedOnAdd();

                    b.Property<bool>("Active");

                    b.Property<decimal>("Amount");

                    b.Property<int>("CountryId");

                    b.Property<bool>("Fixed");

                    b.Property<string>("Name")
                        .IsRequired();

                    b.Property<int?>("ProvinceID");

                    b.Property<int?>("StateID");

                    b.HasKey("TaxId");

                    b.HasIndex("CountryId");

                    b.HasIndex("ProvinceID");

                    b.HasIndex("StateID");

                    b.ToTable("Tax");
                });

            modelBuilder.Entity("ZG.Store.Domain.Models.User", b =>
                {
                    b.Property<Guid>("UserId")
                        .ValueGeneratedOnAdd();

                    b.Property<bool>("Active");

                    b.Property<DateTime>("DateCreated");

                    b.Property<DateTime?>("DateUpdated");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasMaxLength(100);

                    b.Property<string>("FName")
                        .IsRequired()
                        .HasMaxLength(100);

                    b.Property<string>("LName")
                        .IsRequired()
                        .HasMaxLength(100);

                    b.Property<string>("Password")
                        .IsRequired()
                        .HasMaxLength(50);

                    b.Property<string>("Phone")
                        .IsRequired()
                        .HasMaxLength(50);

                    b.Property<string>("UserName")
                        .IsRequired()
                        .HasMaxLength(50);

                    b.HasKey("UserId");

                    b.ToTable("User");
                });

            modelBuilder.Entity("ZG.Store.Domain.Models.Address", b =>
                {
                    b.HasOne("ZG.Store.Domain.Models.Country", "Country")
                        .WithMany("Addresses")
                        .HasForeignKey("CountryId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("ZG.Store.Domain.Models.Province", "Province")
                        .WithMany("Addresses")
                        .HasForeignKey("ProvinceId");

                    b.HasOne("ZG.Store.Domain.Models.State", "State")
                        .WithMany("Addresses")
                        .HasForeignKey("StateId");

                    b.HasOne("ZG.Store.Domain.Models.User", "User")
                        .WithMany("Addresses")
                        .HasForeignKey("UserId1");
                });

            modelBuilder.Entity("ZG.Store.Domain.Models.Email", b =>
                {
                    b.HasOne("ZG.Store.Domain.Models.Order", "Order")
                        .WithMany()
                        .HasForeignKey("OrderId");
                });

            modelBuilder.Entity("ZG.Store.Domain.Models.Order", b =>
                {
                    b.HasOne("ZG.Store.Domain.Models.Country", "BillingCountry")
                        .WithMany("OrdersBilling")
                        .HasForeignKey("BillingCountryId");

                    b.HasOne("ZG.Store.Domain.Models.Province", "BillingProvince")
                        .WithMany("OrdersBilling")
                        .HasForeignKey("BillingProvinceId");

                    b.HasOne("ZG.Store.Domain.Models.State", "BillingState")
                        .WithMany("OrdersBilling")
                        .HasForeignKey("BillingStateId");

                    b.HasOne("ZG.Store.Domain.Models.OrderStatus", "OrderStatu")
                        .WithMany("Orders")
                        .HasForeignKey("OrderStatusId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("ZG.Store.Domain.Models.Country", "ShippingCountry")
                        .WithMany("OrdersShipping")
                        .HasForeignKey("ShippingCountryId");

                    b.HasOne("ZG.Store.Domain.Models.ShippingProvider", "ShippingProvider")
                        .WithMany("Orders")
                        .HasForeignKey("ShippingProviderId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("ZG.Store.Domain.Models.Province", "ShippingProvince")
                        .WithMany("OrdersShipping")
                        .HasForeignKey("ShippingProvinceId");

                    b.HasOne("ZG.Store.Domain.Models.State", "ShippingState")
                        .WithMany("OrdersShipping")
                        .HasForeignKey("ShippingStateId");

                    b.HasOne("ZG.Store.Domain.Models.User", "User")
                        .WithMany()
                        .HasForeignKey("UserId");
                });

            modelBuilder.Entity("ZG.Store.Domain.Models.OrderProduct", b =>
                {
                    b.HasOne("ZG.Store.Domain.Models.Order", "Order")
                        .WithMany("OrderProducts")
                        .HasForeignKey("OrderId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("ZG.Store.Domain.Models.Product", "Product")
                        .WithMany()
                        .HasForeignKey("ProductId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("ZG.Store.Domain.Models.Product", b =>
                {
                    b.HasOne("ZG.Store.Domain.Models.ProductCategory", "ProductCategory")
                        .WithMany("Products")
                        .HasForeignKey("ProductCategoryId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("ZG.Store.Domain.Models.ProductImage", b =>
                {
                    b.HasOne("ZG.Store.Domain.Models.Product", "Product")
                        .WithMany("Images")
                        .HasForeignKey("ProductId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("ZG.Store.Domain.Models.Province", b =>
                {
                    b.HasOne("ZG.Store.Domain.Models.Country", "Country")
                        .WithMany()
                        .HasForeignKey("CountryId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("ZG.Store.Domain.Models.Shipping", b =>
                {
                    b.HasOne("ZG.Store.Domain.Models.Country", "Country")
                        .WithMany("Shippings")
                        .HasForeignKey("CountryId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("ZG.Store.Domain.Models.Product", "Product")
                        .WithMany()
                        .HasForeignKey("ProductId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("ZG.Store.Domain.Models.Province", "Province")
                        .WithMany("Shippings")
                        .HasForeignKey("ProvinceId");

                    b.HasOne("ZG.Store.Domain.Models.ShippingProvider", "ShippingProvider")
                        .WithMany("Shippings")
                        .HasForeignKey("ShippingProviderId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("ZG.Store.Domain.Models.State", "State")
                        .WithMany("Shippings")
                        .HasForeignKey("StateId");
                });

            modelBuilder.Entity("ZG.Store.Domain.Models.Tax", b =>
                {
                    b.HasOne("ZG.Store.Domain.Models.Country", "Country")
                        .WithMany("Taxes")
                        .HasForeignKey("CountryId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("ZG.Store.Domain.Models.Province", "Province")
                        .WithMany("Taxes")
                        .HasForeignKey("ProvinceID");

                    b.HasOne("ZG.Store.Domain.Models.State", "State")
                        .WithMany("Taxes")
                        .HasForeignKey("StateID");
                });
        }
    }
}
