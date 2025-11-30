using System.Data;
using API.Entity;
using Microsoft.EntityFrameworkCore;

namespace API.Data;

class DataContext: DbContext
{
    public DbSet<Product> Products => Set<Product>();
}