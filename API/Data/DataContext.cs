using System.Data;
using API.Entity;
using Microsoft.EntityFrameworkCore;

namespace API.Data;

class DataContext(DbContextOptions options) : DbContext(options)
{
    public DbSet<Product> Products => Set<Product>();
}