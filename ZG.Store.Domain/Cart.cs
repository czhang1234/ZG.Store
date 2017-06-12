using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;
using ZG.Store.Domain.Models;
using ZG.Store.Common;

namespace ZG.Store.Domain
{
    public class Cart
    {
        private List<CartLine> _cartLines = new List<CartLine>();

        public IEnumerable<CartLine> Lines
        {
            get { return _cartLines; }
        }

        public int NumerbOfItems
        {
            get { return _cartLines.Sum(l => l.Quantity); }
        }

        public void AddItem(Product product, int quantity)
        {
            UpdateItem(product, quantity, UpdateQuantityOption.Add);
        }

        public void UpdateItem(Product product, int quantity)
        {
            UpdateItem(product, quantity, UpdateQuantityOption.Update);
        }

        public void RemoveLine(Product product)
        {
            _cartLines.RemoveAll(l => l.Product.ProductId == product.ProductId);
        }

        public decimal ComputeTotalItems()
        {
            return _cartLines.Sum(l => l.Quantity * l.Product.SalePrice);
        }

        public decimal ComputeShippingAndHandling()
        {
            return 2.5m;
        }

        public decimal ComputeTotalBeforeTax()
        {
            return ComputeTotalItems() + ComputeShippingAndHandling();
        }

        public decimal ComputeTax()
        {
            return 4.5m;
        }

        public decimal ComputeOrderTotal()
        {
            return ComputeTotalBeforeTax() + ComputeTax();
        }

        public void Clear()
        {
            _cartLines.Clear();
        }

        public void UpdateItem(Product product, int quantity, UpdateQuantityOption updateQuantityOption)
        {
            CartLine line = _cartLines.FirstOrDefault(p => p.Product.ProductId == product.ProductId);

            if (line == null)
            {
                _cartLines.Add(new CartLine { Product = product, Quantity = quantity });
            }
            else
            {
                if (updateQuantityOption == UpdateQuantityOption.Add)
                {
                    line.Quantity += quantity;
                }
                else if (updateQuantityOption == UpdateQuantityOption.Update)
                {
                    if (quantity > 0)
                    {
                        line.Quantity = quantity;
                    }
                    else
                    {
                        RemoveLine(product);
                    }
                }
            }
        }
    }

    public class CartLine
    {
        public Product Product { get; set; }
        public int Quantity { get; set; }
    }
}
