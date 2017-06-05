﻿using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Metadata;

namespace ZG.Store.Services.Migrations.Product
{
    public partial class CreateProductTables : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "ProductCategories",
                columns: table => new
                {
                    ProductCategoryId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Active = table.Column<bool>(nullable: false),
                    CategoryName = table.Column<string>(maxLength: 50, nullable: false),
                    ParentID = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ProductCategories", x => x.ProductCategoryId);
                });

            migrationBuilder.CreateTable(
                name: "Products",
                columns: table => new
                {
                    ProductId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Active = table.Column<bool>(nullable: false),
                    Description = table.Column<string>(nullable: false),
                    Height = table.Column<decimal>(nullable: false),
                    IsReviewEnabled = table.Column<bool>(nullable: false),
                    Length = table.Column<decimal>(nullable: false),
                    Name = table.Column<string>(maxLength: 50, nullable: false),
                    ProductCategoryId = table.Column<int>(nullable: false),
                    ProductLink = table.Column<string>(maxLength: 400, nullable: true),
                    RatingScore = table.Column<decimal>(nullable: true),
                    SalePrice = table.Column<decimal>(nullable: false),
                    ShippingHeight = table.Column<decimal>(nullable: false),
                    ShippingLength = table.Column<decimal>(nullable: false),
                    ShippingWeight = table.Column<decimal>(nullable: false),
                    ShippingWidth = table.Column<decimal>(nullable: false),
                    TotalReviewCount = table.Column<int>(nullable: false),
                    Weight = table.Column<decimal>(nullable: false),
                    Width = table.Column<decimal>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Products", x => x.ProductId);
                    table.ForeignKey(
                        name: "FK_Products_ProductCategories_ProductCategoryId",
                        column: x => x.ProductCategoryId,
                        principalTable: "ProductCategories",
                        principalColumn: "ProductCategoryId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Products_ProductCategoryId",
                table: "Products",
                column: "ProductCategoryId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Products");

            migrationBuilder.DropTable(
                name: "ProductCategories");
        }
    }
}
