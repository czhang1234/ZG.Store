using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;
using ZG.Store.Domain.Models;
using ZG.Store.Common;

namespace ZG.Store.Services
{
    public interface IUserService
    {
        IEnumerable<User> GetAll();
        User Get(string userName, string password);
        User Get(Guid id);
        User Create(User user);
        CRUDStatus Update(Guid id, User user);
        CRUDStatus Delete(Guid id);
    }

    public class UserService : IUserService
    {
        private readonly StoreContext _context;

        public UserService(StoreContext context)
        {
            _context = context;
        }

        public IEnumerable<User> GetAll()
        {
            return _context.Users.ToList();
        }

        public User Get(string userName, string password)
        {
            return _context.Users.FirstOrDefault(u => u.UserName == userName && u.Password == password);
        }

        public User Get(Guid id)
        {
            return _context.Users.FirstOrDefault(u => u.UserId == id);
        }

        public User Create(User user)
        {
            _context.Users.Add(user);
            _context.SaveChanges();

            return user;
        }

        public CRUDStatus Update(Guid id, User user)
        {
            var userInDb = _context.Users.FirstOrDefault(u => u.UserId == id);
            if (userInDb == null)
            {
                return CRUDStatus.NotFound;
            }

            userInDb.Password = user.Password;
            userInDb.FName = user.FName;
            userInDb.LName = user.LName;
            userInDb.Email = user.Email;

            _context.Users.Update(userInDb);
            _context.SaveChanges();

            return CRUDStatus.Successful;
        }

        public CRUDStatus Delete(Guid id)
        {
            var user = _context.Users.FirstOrDefault(u => u.UserId == id);
            if (user == null)
            {
                return CRUDStatus.NotFound;
            }

            _context.Users.Remove(user);
            _context.SaveChanges();

            return CRUDStatus.Successful;
        }
    }
}
