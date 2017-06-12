using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Metadata;

namespace ZG.Store.Services.Migrations
{
    public partial class UpdateOrdersTables : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
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

            migrationBuilder.CreateIndex(
                name: "IX_Emails_OrderId",
                table: "Emails",
                column: "OrderId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Emails");
        }
    }
}
