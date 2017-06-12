using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;

namespace ZG.Store.Services.Migrations.Product
{
    public partial class CreateProductImageUnique : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "FileName",
                table: "ProductImage",
                nullable: true,
                oldClrType: typeof(string),
                oldNullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_ProductImage_FileName",
                table: "ProductImage",
                column: "FileName",
                unique: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_ProductImage_FileName",
                table: "ProductImage");

            migrationBuilder.AlterColumn<string>(
                name: "FileName",
                table: "ProductImage",
                nullable: true,
                oldClrType: typeof(string),
                oldNullable: true);
        }
    }
}
