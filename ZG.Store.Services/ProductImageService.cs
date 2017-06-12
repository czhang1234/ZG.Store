using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using ZG.Store.Common;
using ZG.Store.Domain.Models;

namespace ZG.Store.Services
{
    public interface IProductImageService
    {
        IEnumerable<ProductImage> GetAll(int productId);
        ProductImage GetById(long id);
        ProductImage Create(ProductImage image);
        CRUDStatus Update(long id, ProductImage image);
        CRUDStatus Delete(long id);
    }

    public class ProductImageService : IProductImageService
    {
        private readonly ProductContext _context;

        public ProductImageService(ProductContext context)
        {
            _context = context;
        }

        public IEnumerable<ProductImage> GetAll(int productId)
        {
            return _context.ProductImages.Where(p => p.ProductId == productId).ToList();
        }

        public ProductImage GetById(long id)
        {
            return _context.ProductImages.FirstOrDefault(b => b.ProductImageId == id);
        }

        public ProductImage Create(ProductImage image)
        {
            _context.ProductImages.Add(image);
            _context.SaveChanges();

            return image;
        }

        public CRUDStatus Update(long id, ProductImage image)
        {
            var img = _context.ProductImages.FirstOrDefault(b => b.ProductImageId == id);
            if (img == null)
            {
                return CRUDStatus.NotFound;
            }

            img.FileName = image.FileName;
            img.ProductId = image.ProductId;

            _context.ProductImages.Update(img);
            _context.SaveChanges();

            return CRUDStatus.Successful;
        }

        public CRUDStatus Delete(long id)
        {
            var image = _context.ProductImages.FirstOrDefault(b => b.ProductImageId == id);
            if (image == null)
            {
                return CRUDStatus.NotFound;
            }

            _context.ProductImages.Remove(image);
            _context.SaveChanges();

            return CRUDStatus.Successful;
        }
    }
}
