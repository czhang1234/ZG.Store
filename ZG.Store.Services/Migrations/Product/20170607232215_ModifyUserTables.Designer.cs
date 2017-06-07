using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using ZG.Store.Services.Models;

namespace ZG.Store.Services.Migrations.Product
{
    [DbContext(typeof(ProductContext))]
    [Migration("20170607232215_ModifyUserTables")]
    partial class ModifyUserTables
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
            modelBuilder
                .HasAnnotation("ProductVersion", "1.1.2")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("ZG.Store.Services.Models.Product", b =>
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

                    b.ToTable("Products");
                });

            modelBuilder.Entity("ZG.Store.Services.Models.ProductCategory", b =>
                {
                    b.Property<int>("ProductCategoryId")
                        .ValueGeneratedOnAdd();

                    b.Property<bool>("Active");

                    b.Property<string>("CategoryName")
                        .IsRequired()
                        .HasMaxLength(50);

                    b.Property<int?>("ParentId");

                    b.HasKey("ProductCategoryId");

                    b.ToTable("ProductCategories");
                });

            modelBuilder.Entity("ZG.Store.Services.Models.ProductImage", b =>
                {
                    b.Property<int>("ProductImageId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("FileName");

                    b.Property<int>("ProductId");

                    b.HasKey("ProductImageId");

                    b.HasIndex("ProductId");

                    b.ToTable("ProductImage");
                });

            modelBuilder.Entity("ZG.Store.Services.Models.Product", b =>
                {
                    b.HasOne("ZG.Store.Services.Models.ProductCategory", "ProductCategory")
                        .WithMany("Products")
                        .HasForeignKey("ProductCategoryId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("ZG.Store.Services.Models.ProductImage", b =>
                {
                    b.HasOne("ZG.Store.Services.Models.Product", "Product")
                        .WithMany("Images")
                        .HasForeignKey("ProductId")
                        .OnDelete(DeleteBehavior.Cascade);
                });
        }
    }
}
