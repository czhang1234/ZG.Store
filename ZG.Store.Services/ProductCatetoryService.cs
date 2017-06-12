using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;
using ZG.Store.Domain.Models;
using ZG.Store.Common;

namespace ZG.Store.Services
{
    public interface IProductCatetoryService
    {
        List<ProductCategory> GetAll();
        ProductCategory GetProductCategoryById(long id);
        ProductCategory CreateProductCategory(ProductCategory category);
        CRUDStatus UpdateProductCategory(long id, ProductCategory prodCategory);
        CRUDStatus DeleteProductCategory(long id);
    }

    public class ProductCatetoryService : IProductCatetoryService
    {
        private readonly ProductContext _context;

        public ProductCatetoryService(ProductContext context)
        {
            _context = context;
        }

        public List<ProductCategory> GetAll()
        {
            return _context.ProductCategories.ToList();
        }

         public ProductCategory GetProductCategoryById(long id)
        {
            return _context.ProductCategories.FirstOrDefault(b => b.ProductCategoryId == id);
        }

        public ProductCategory CreateProductCategory(ProductCategory category)
        {
            _context.ProductCategories.Add(category);
            _context.SaveChanges();

            return category;
        }

        public CRUDStatus UpdateProductCategory(long id, ProductCategory prodCategory)
        {
            var category = _context.ProductCategories.FirstOrDefault(b => b.ProductCategoryId == id);
            if (category == null)
            {
                return CRUDStatus.NotFound;
            }

            category.CategoryName = prodCategory.CategoryName;
            category.ParentId = prodCategory.ParentId;
            category.Active = prodCategory.Active;
            category.Products = prodCategory.Products;

            _context.ProductCategories.Update(category);
            _context.SaveChanges();

            return CRUDStatus.Successful;
        }

        public CRUDStatus DeleteProductCategory(long id)
        {
            var category = _context.ProductCategories.FirstOrDefault(b => b.ProductCategoryId == id);
            if (category == null)
            {
                return CRUDStatus.NotFound;
            }

            _context.ProductCategories.Remove(category);
            _context.SaveChanges();

            return CRUDStatus.Successful;
        }
    }
}
