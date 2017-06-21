using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using ZG.Store.Common;
using ZG.Store.Domain.Models;
using Dapper;

namespace ZG.Store.Services
{
    public interface IProductSearchService
    {
        IEnumerable<Product> Search(string terms);
    }

    public class ProductSearchService : IProductSearchService
    {
        IDbConnection _connection;
        public ProductSearchService(IDbConnection connection)
        {
            _connection = connection;
        }

        public IEnumerable<Product> Search(string terms)
        {
            return _connection.Query<Product>("select * from Products where FREETEXT ((Name, Description), '" + terms + "') ").ToList();
        }
    }
}
