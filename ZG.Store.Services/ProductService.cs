using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using ZG.Store.Common;
using ZG.Store.Domain.Models;

namespace ZG.Store.Services
{
    public interface IProductService
    {
        IEnumerable<Product> GetAll(int categoryId);
        Product GetById(long id);
        Product Create(Product product);
        CRUDStatus Update(long id, Product product);
        CRUDStatus Delete(long id);
    }

    public class ProductService : IProductService
    {
        private readonly StoreContext _context;

        public ProductService(StoreContext context)
        {
            _context = context;
        }

        public IEnumerable<Product> GetAll(int categoryId)
        {
            return _context.Products.Where(p => p.ProductCategoryId == categoryId).ToList();
        }

        public Product GetById(long id)
        {
            var product = _context.Products.FirstOrDefault(b => b.ProductId == id);
            _context.Entry(product).Collection(p => p.Images).Load();

            return product;
        }

        public Product Create(Product product)
        {
            _context.Products.Add(product);
            _context.SaveChanges();

            return product;
        }

        public CRUDStatus Update(long id, Product product)
        {
            var prod = _context.Products.FirstOrDefault(b => b.ProductId == id);
            if (prod == null)
            {
                return CRUDStatus.NotFound;
            }

            prod.Name = product.Name;
            prod.Active = product.Active;
            prod.Description = product.Description;
            prod.Height = product.Height;
            prod.IsReviewEnabled = product.IsReviewEnabled;
            prod.Length = product.Length;
            prod.ProductCategoryId = product.ProductCategoryId;
            prod.ProductLink = product.ProductLink;
            prod.RatingScore = product.RatingScore;
            prod.SalePrice = product.SalePrice;
            prod.ShippingHeight = product.ShippingHeight;
            prod.ShippingLength = product.ShippingLength;
            prod.ShippingWeight = product.ShippingWeight;
            prod.ShippingWidth = product.ShippingWidth;
            prod.TotalReviewCount = product.TotalReviewCount;
            prod.Weight = product.Weight;
            prod.Width = product.Width;

            _context.Products.Update(prod);
            _context.SaveChanges();

            return CRUDStatus.Successful;
        }

        public CRUDStatus Delete(long id)
        {
            var product = _context.Products.FirstOrDefault(b => b.ProductId == id);
            if (product == null)
            {
                return CRUDStatus.NotFound;
            }

            _context.Products.Remove(product);
            _context.SaveChanges();

            return CRUDStatus.Successful;
        }
    }
}
