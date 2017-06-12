using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Metadata;

namespace ZG.Store.Domain.Migrations
{
    public partial class CreateTables : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Admins",
                columns: table => new
                {
                    AdminId = table.Column<Guid>(nullable: false),
                    Email = table.Column<string>(maxLength: 100, nullable: false),
                    FName = table.Column<string>(maxLength: 100, nullable: false),
                    LName = table.Column<string>(maxLength: 100, nullable: false),
                    Password = table.Column<string>(maxLength: 50, nullable: false),
                    UserName = table.Column<string>(maxLength: 50, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Admins", x => x.AdminId);
                });

            migrationBuilder.CreateTable(
                name: "Blogs",
                columns: table => new
                {
                    BlogId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Url = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Blogs", x => x.BlogId);
                });

            migrationBuilder.CreateTable(
                name: "Countries",
                columns: table => new
                {
                    CountryId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Active = table.Column<bool>(nullable: false),
                    Code = table.Column<string>(maxLength: 2, nullable: false),
                    Name = table.Column<string>(maxLength: 50, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Countries", x => x.CountryId);
                });

            migrationBuilder.CreateTable(
                name: "OrderStatus",
                columns: table => new
                {
                    OrderStatusId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Active = table.Column<bool>(nullable: false),
                    Code = table.Column<int>(nullable: false),
                    Name = table.Column<string>(maxLength: 50, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_OrderStatus", x => x.OrderStatusId);
                });

            migrationBuilder.CreateTable(
                name: "ProductCategories",
                columns: table => new
                {
                    ProductCategoryId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Active = table.Column<bool>(nullable: false),
                    CategoryName = table.Column<string>(maxLength: 50, nullable: false),
                    ParentId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ProductCategories", x => x.ProductCategoryId);
                });

            migrationBuilder.CreateTable(
                name: "ShippingProviders",
                columns: table => new
                {
                    ShippingProviderId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Active = table.Column<bool>(nullable: false),
                    Name = table.Column<string>(maxLength: 50, nullable: false),
                    ShippingCost = table.Column<decimal>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ShippingProviders", x => x.ShippingProviderId);
                });

            migrationBuilder.CreateTable(
                name: "States",
                columns: table => new
                {
                    StateId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Active = table.Column<bool>(nullable: true),
                    Code = table.Column<string>(maxLength: 2, nullable: false),
                    Name = table.Column<string>(maxLength: 50, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_States", x => x.StateId);
                });

            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    UserId = table.Column<Guid>(nullable: false),
                    Active = table.Column<bool>(nullable: false),
                    DateCreated = table.Column<DateTime>(nullable: false),
                    DateUpdated = table.Column<DateTime>(nullable: true),
                    Email = table.Column<string>(maxLength: 100, nullable: false),
                    FName = table.Column<string>(maxLength: 100, nullable: false),
                    LName = table.Column<string>(maxLength: 100, nullable: false),
                    Password = table.Column<string>(maxLength: 50, nullable: false),
                    Phone = table.Column<string>(maxLength: 50, nullable: false),
                    UserName = table.Column<string>(maxLength: 50, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.UserId);
                });

            migrationBuilder.CreateTable(
                name: "Posts",
                columns: table => new
                {
                    PostId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    AllowComments = table.Column<bool>(nullable: false),
                    BlogId = table.Column<int>(nullable: false),
                    Content = table.Column<string>(nullable: true),
                    Status = table.Column<int>(nullable: false),
                    Title = table.Column<string>(nullable: true),
                    Visibility = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Posts", x => x.PostId);
                    table.ForeignKey(
                        name: "FK_Posts_Blogs_BlogId",
                        column: x => x.BlogId,
                        principalTable: "Blogs",
                        principalColumn: "BlogId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Provinces",
                columns: table => new
                {
                    ProvinceId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Active = table.Column<bool>(nullable: false),
                    Code = table.Column<string>(maxLength: 2, nullable: true),
                    CountryId = table.Column<int>(nullable: false),
                    Name = table.Column<string>(maxLength: 50, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Provinces", x => x.ProvinceId);
                    table.ForeignKey(
                        name: "FK_Provinces_Countries_CountryId",
                        column: x => x.CountryId,
                        principalTable: "Countries",
                        principalColumn: "CountryId",
                        onDelete: ReferentialAction.Cascade);
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

            migrationBuilder.CreateTable(
                name: "Comments",
                columns: table => new
                {
                    CommentId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Content = table.Column<string>(nullable: true),
                    DateTime = table.Column<DateTime>(nullable: false),
                    PostId = table.Column<int>(nullable: false),
                    UserId = table.Column<int>(nullable: false),
                    UserId1 = table.Column<Guid>(nullable: true),
                    Visibility = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Comments", x => x.CommentId);
                    table.ForeignKey(
                        name: "FK_Comments_Posts_PostId",
                        column: x => x.PostId,
                        principalTable: "Posts",
                        principalColumn: "PostId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Comments_Users_UserId1",
                        column: x => x.UserId1,
                        principalTable: "Users",
                        principalColumn: "UserId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Address",
                columns: table => new
                {
                    AddressId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Address1 = table.Column<string>(maxLength: 50, nullable: false),
                    Address2 = table.Column<string>(maxLength: 50, nullable: true),
                    City = table.Column<string>(maxLength: 50, nullable: false),
                    CountryId = table.Column<int>(nullable: false),
                    CreationDate = table.Column<DateTime>(nullable: false),
                    IsBilling = table.Column<bool>(nullable: false),
                    IsShipping = table.Column<bool>(nullable: false),
                    Phone = table.Column<string>(maxLength: 50, nullable: false),
                    ProvinceId = table.Column<int>(nullable: true),
                    StateId = table.Column<int>(nullable: true),
                    UserId = table.Column<int>(nullable: false),
                    UserId1 = table.Column<Guid>(nullable: true),
                    Zipcode = table.Column<string>(maxLength: 50, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Address", x => x.AddressId);
                    table.ForeignKey(
                        name: "FK_Address_Countries_CountryId",
                        column: x => x.CountryId,
                        principalTable: "Countries",
                        principalColumn: "CountryId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Address_Provinces_ProvinceId",
                        column: x => x.ProvinceId,
                        principalTable: "Provinces",
                        principalColumn: "ProvinceId",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Address_States_StateId",
                        column: x => x.StateId,
                        principalTable: "States",
                        principalColumn: "StateId",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Address_Users_UserId1",
                        column: x => x.UserId1,
                        principalTable: "Users",
                        principalColumn: "UserId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Orders",
                columns: table => new
                {
                    OrderId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Active = table.Column<bool>(nullable: false),
                    BillingAddress1 = table.Column<string>(maxLength: 50, nullable: false),
                    BillingAddress2 = table.Column<string>(maxLength: 50, nullable: true),
                    BillingCity = table.Column<string>(maxLength: 50, nullable: false),
                    BillingCountryId = table.Column<int>(nullable: false),
                    BillingProvinceId = table.Column<int>(nullable: true),
                    BillingStateId = table.Column<int>(nullable: true),
                    BillingZipcode = table.Column<string>(maxLength: 50, nullable: false),
                    Comments = table.Column<string>(maxLength: 400, nullable: true),
                    DatePlaced = table.Column<DateTime>(nullable: false),
                    DateShipped = table.Column<DateTime>(nullable: true),
                    FullName = table.Column<string>(maxLength: 100, nullable: false),
                    OrderDate = table.Column<DateTime>(nullable: false),
                    OrderNumber = table.Column<string>(maxLength: 50, nullable: false),
                    OrderStatusId = table.Column<int>(nullable: false),
                    Shipping = table.Column<decimal>(nullable: false),
                    ShippingAddress1 = table.Column<string>(maxLength: 50, nullable: false),
                    ShippingAddress2 = table.Column<string>(maxLength: 50, nullable: true),
                    ShippingCity = table.Column<string>(maxLength: 50, nullable: false),
                    ShippingCountryId = table.Column<int>(nullable: false),
                    ShippingNumber = table.Column<string>(maxLength: 50, nullable: false),
                    ShippingProviderId = table.Column<int>(nullable: false),
                    ShippingProvinceId = table.Column<int>(nullable: true),
                    ShippingStateId = table.Column<int>(nullable: true),
                    ShippingZipcode = table.Column<string>(maxLength: 50, nullable: false),
                    Tax = table.Column<decimal>(nullable: false),
                    Total = table.Column<decimal>(nullable: false),
                    UserId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Orders", x => x.OrderId);
                    table.ForeignKey(
                        name: "FK_Orders_Countries_BillingCountryId",
                        column: x => x.BillingCountryId,
                        principalTable: "Countries",
                        principalColumn: "CountryId",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Orders_Provinces_BillingProvinceId",
                        column: x => x.BillingProvinceId,
                        principalTable: "Provinces",
                        principalColumn: "ProvinceId",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Orders_States_BillingStateId",
                        column: x => x.BillingStateId,
                        principalTable: "States",
                        principalColumn: "StateId",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Orders_OrderStatus_OrderStatusId",
                        column: x => x.OrderStatusId,
                        principalTable: "OrderStatus",
                        principalColumn: "OrderStatusId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Orders_Countries_ShippingCountryId",
                        column: x => x.ShippingCountryId,
                        principalTable: "Countries",
                        principalColumn: "CountryId",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Orders_ShippingProviders_ShippingProviderId",
                        column: x => x.ShippingProviderId,
                        principalTable: "ShippingProviders",
                        principalColumn: "ShippingProviderId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Orders_Provinces_ShippingProvinceId",
                        column: x => x.ShippingProvinceId,
                        principalTable: "Provinces",
                        principalColumn: "ProvinceId",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Orders_States_ShippingStateId",
                        column: x => x.ShippingStateId,
                        principalTable: "States",
                        principalColumn: "StateId",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Orders_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "UserId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Tax",
                columns: table => new
                {
                    TaxId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Active = table.Column<bool>(nullable: false),
                    Amount = table.Column<decimal>(nullable: false),
                    CountryId = table.Column<int>(nullable: false),
                    Fixed = table.Column<bool>(nullable: false),
                    Name = table.Column<string>(nullable: false),
                    ProvinceID = table.Column<int>(nullable: true),
                    StateID = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Tax", x => x.TaxId);
                    table.ForeignKey(
                        name: "FK_Tax_Countries_CountryId",
                        column: x => x.CountryId,
                        principalTable: "Countries",
                        principalColumn: "CountryId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Tax_Provinces_ProvinceID",
                        column: x => x.ProvinceID,
                        principalTable: "Provinces",
                        principalColumn: "ProvinceId",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Tax_States_StateID",
                        column: x => x.StateID,
                        principalTable: "States",
                        principalColumn: "StateId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "ProductImages",
                columns: table => new
                {
                    ProductImageId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    FileName = table.Column<string>(nullable: true),
                    ProductId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ProductImages", x => x.ProductImageId);
                    table.ForeignKey(
                        name: "FK_ProductImages_Products_ProductId",
                        column: x => x.ProductId,
                        principalTable: "Products",
                        principalColumn: "ProductId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Shippings",
                columns: table => new
                {
                    ShippingId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Active = table.Column<bool>(nullable: false),
                    City = table.Column<string>(nullable: true),
                    CountryId = table.Column<int>(nullable: false),
                    ProductId = table.Column<int>(nullable: false),
                    ProvinceId = table.Column<int>(nullable: true),
                    Rate = table.Column<decimal>(nullable: false),
                    ShippingProviderId = table.Column<int>(nullable: false),
                    StateId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Shippings", x => x.ShippingId);
                    table.ForeignKey(
                        name: "FK_Shippings_Countries_CountryId",
                        column: x => x.CountryId,
                        principalTable: "Countries",
                        principalColumn: "CountryId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Shippings_Products_ProductId",
                        column: x => x.ProductId,
                        principalTable: "Products",
                        principalColumn: "ProductId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Shippings_Provinces_ProvinceId",
                        column: x => x.ProvinceId,
                        principalTable: "Provinces",
                        principalColumn: "ProvinceId",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Shippings_ShippingProviders_ShippingProviderId",
                        column: x => x.ShippingProviderId,
                        principalTable: "ShippingProviders",
                        principalColumn: "ShippingProviderId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Shippings_States_StateId",
                        column: x => x.StateId,
                        principalTable: "States",
                        principalColumn: "StateId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Emails",
                columns: table => new
                {
                    EmailId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Body = table.Column<string>(nullable: false),
                    Cc = table.Column<string>(maxLength: 250, nullable: true),
                    CreationDate = table.Column<DateTime>(nullable: false),
                    ExceptionMessage = table.Column<string>(maxLength: 300, nullable: true),
                    FromAddress = table.Column<string>(maxLength: 50, nullable: false),
                    FromName = table.Column<string>(maxLength: 50, nullable: true),
                    IsBodyHtml = table.Column<bool>(nullable: false),
                    OrderId = table.Column<int>(nullable: true),
                    Status = table.Column<string>(maxLength: 20, nullable: false),
                    Subject = table.Column<string>(maxLength: 200, nullable: false),
                    ToAddress = table.Column<string>(maxLength: 50, nullable: false),
                    ToName = table.Column<string>(maxLength: 50, nullable: true),
                    Type = table.Column<string>(maxLength: 50, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Emails", x => x.EmailId);
                    table.ForeignKey(
                        name: "FK_Emails_Orders_OrderId",
                        column: x => x.OrderId,
                        principalTable: "Orders",
                        principalColumn: "OrderId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "OrderProducts",
                columns: table => new
                {
                    OrderProductId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Active = table.Column<bool>(nullable: false),
                    Discount = table.Column<decimal>(nullable: true),
                    DownloadKey = table.Column<string>(maxLength: 50, nullable: true),
                    DownloadURL = table.Column<string>(maxLength: 400, nullable: true),
                    OrderDate = table.Column<DateTime>(nullable: false),
                    OrderId = table.Column<int>(nullable: false),
                    PricePerUnit = table.Column<decimal>(nullable: false),
                    ProductId = table.Column<int>(nullable: false),
                    Quantity = table.Column<int>(nullable: false),
                    Shipping = table.Column<decimal>(nullable: false),
                    TotalPrice = table.Column<decimal>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_OrderProducts", x => x.OrderProductId);
                    table.ForeignKey(
                        name: "FK_OrderProducts_Orders_OrderId",
                        column: x => x.OrderId,
                        principalTable: "Orders",
                        principalColumn: "OrderId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_OrderProducts_Products_ProductId",
                        column: x => x.ProductId,
                        principalTable: "Products",
                        principalColumn: "ProductId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Address_CountryId",
                table: "Address",
                column: "CountryId");

            migrationBuilder.CreateIndex(
                name: "IX_Address_ProvinceId",
                table: "Address",
                column: "ProvinceId");

            migrationBuilder.CreateIndex(
                name: "IX_Address_StateId",
                table: "Address",
                column: "StateId");

            migrationBuilder.CreateIndex(
                name: "IX_Address_UserId1",
                table: "Address",
                column: "UserId1");

            migrationBuilder.CreateIndex(
                name: "IX_Comments_PostId",
                table: "Comments",
                column: "PostId");

            migrationBuilder.CreateIndex(
                name: "IX_Comments_UserId1",
                table: "Comments",
                column: "UserId1");

            migrationBuilder.CreateIndex(
                name: "IX_Emails_OrderId",
                table: "Emails",
                column: "OrderId");

            migrationBuilder.CreateIndex(
                name: "IX_Orders_BillingCountryId",
                table: "Orders",
                column: "BillingCountryId");

            migrationBuilder.CreateIndex(
                name: "IX_Orders_BillingProvinceId",
                table: "Orders",
                column: "BillingProvinceId");

            migrationBuilder.CreateIndex(
                name: "IX_Orders_BillingStateId",
                table: "Orders",
                column: "BillingStateId");

            migrationBuilder.CreateIndex(
                name: "IX_Orders_OrderStatusId",
                table: "Orders",
                column: "OrderStatusId");

            migrationBuilder.CreateIndex(
                name: "IX_Orders_ShippingCountryId",
                table: "Orders",
                column: "ShippingCountryId");

            migrationBuilder.CreateIndex(
                name: "IX_Orders_ShippingProviderId",
                table: "Orders",
                column: "ShippingProviderId");

            migrationBuilder.CreateIndex(
                name: "IX_Orders_ShippingProvinceId",
                table: "Orders",
                column: "ShippingProvinceId");

            migrationBuilder.CreateIndex(
                name: "IX_Orders_ShippingStateId",
                table: "Orders",
                column: "ShippingStateId");

            migrationBuilder.CreateIndex(
                name: "IX_Orders_UserId",
                table: "Orders",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_OrderProducts_OrderId",
                table: "OrderProducts",
                column: "OrderId");

            migrationBuilder.CreateIndex(
                name: "IX_OrderProducts_ProductId",
                table: "OrderProducts",
                column: "ProductId");

            migrationBuilder.CreateIndex(
                name: "IX_Posts_BlogId",
                table: "Posts",
                column: "BlogId");

            migrationBuilder.CreateIndex(
                name: "IX_Products_ProductCategoryId",
                table: "Products",
                column: "ProductCategoryId");

            migrationBuilder.CreateIndex(
                name: "IX_ProductImages_FileName",
                table: "ProductImages",
                column: "FileName",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_ProductImages_ProductId",
                table: "ProductImages",
                column: "ProductId");

            migrationBuilder.CreateIndex(
                name: "IX_Provinces_CountryId",
                table: "Provinces",
                column: "CountryId");

            migrationBuilder.CreateIndex(
                name: "IX_Shippings_CountryId",
                table: "Shippings",
                column: "CountryId");

            migrationBuilder.CreateIndex(
                name: "IX_Shippings_ProductId",
                table: "Shippings",
                column: "ProductId");

            migrationBuilder.CreateIndex(
                name: "IX_Shippings_ProvinceId",
                table: "Shippings",
                column: "ProvinceId");

            migrationBuilder.CreateIndex(
                name: "IX_Shippings_ShippingProviderId",
                table: "Shippings",
                column: "ShippingProviderId");

            migrationBuilder.CreateIndex(
                name: "IX_Shippings_StateId",
                table: "Shippings",
                column: "StateId");

            migrationBuilder.CreateIndex(
                name: "IX_Tax_CountryId",
                table: "Tax",
                column: "CountryId");

            migrationBuilder.CreateIndex(
                name: "IX_Tax_ProvinceID",
                table: "Tax",
                column: "ProvinceID");

            migrationBuilder.CreateIndex(
                name: "IX_Tax_StateID",
                table: "Tax",
                column: "StateID");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Address");

            migrationBuilder.DropTable(
                name: "Admins");

            migrationBuilder.DropTable(
                name: "Comments");

            migrationBuilder.DropTable(
                name: "Emails");

            migrationBuilder.DropTable(
                name: "OrderProducts");

            migrationBuilder.DropTable(
                name: "ProductImages");

            migrationBuilder.DropTable(
                name: "Shippings");

            migrationBuilder.DropTable(
                name: "Tax");

            migrationBuilder.DropTable(
                name: "Posts");

            migrationBuilder.DropTable(
                name: "Orders");

            migrationBuilder.DropTable(
                name: "Products");

            migrationBuilder.DropTable(
                name: "Blogs");

            migrationBuilder.DropTable(
                name: "Provinces");

            migrationBuilder.DropTable(
                name: "States");

            migrationBuilder.DropTable(
                name: "OrderStatus");

            migrationBuilder.DropTable(
                name: "ShippingProviders");

            migrationBuilder.DropTable(
                name: "Users");

            migrationBuilder.DropTable(
                name: "ProductCategories");

            migrationBuilder.DropTable(
                name: "Countries");
        }
    }
}
