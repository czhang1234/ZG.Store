using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;
using ZG.Store.Services.Models;
using ZG.Store.Common;

namespace ZG.Store.Services.Services
{
    public interface IAdminService
    {
        IEnumerable<Admin> GetAll();
        Admin Get(string userName, string password);
        Admin Get(Guid id);
        Admin Create(Admin admin);
        CRUDStatus Update(Guid id, Admin admin);
        CRUDStatus Delete(Guid id);
    }

    public class AdminService : IAdminService
    {
        private readonly UserContext _context;

        public AdminService(UserContext context)
        {
            _context = context;
        }

        public IEnumerable<Admin> GetAll()
        {
            return _context.Admins.ToList();
        }

        public Admin Get(string userName, string password)
        {
            return _context.Admins.FirstOrDefault(u => u.UserName == userName && u.Password == password);
        }

        public Admin Get(Guid id)
        {
            return _context.Admins.FirstOrDefault(u => u.AdminId == id);
        }

        public Admin Create(Admin admin)
        {
            _context.Admins.Add(admin);
            _context.SaveChanges();

            return admin;
        }

        public CRUDStatus Update(Guid id, Admin admin)
        {
            var adminInDb = _context.Admins.FirstOrDefault(a => a.AdminId == id);
            if (adminInDb == null)
            {
                return CRUDStatus.NotFound;
            }

            adminInDb.Password = admin.Password;
            adminInDb.FName = admin.FName;
            adminInDb.LName = admin.LName;
            adminInDb.Email = admin.Email;

            _context.Admins.Update(adminInDb);
            _context.SaveChanges();

            return CRUDStatus.Successful;
        }

        public CRUDStatus Delete(Guid id)
        {
            var admin = _context.Admins.FirstOrDefault(u => u.AdminId == id);
            if (admin == null)
            {
                return CRUDStatus.NotFound;
            }

            _context.Admins.Remove(admin);
            _context.SaveChanges();

            return CRUDStatus.Successful;
        }
    }
}
