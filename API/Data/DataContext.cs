using System.Data;
using API.Entity;
using Microsoft.EntityFrameworkCore;

namespace API.Data;

class DataContext(DbContextOptions options) : DbContext(options)
{
    public DbSet<Product> Products => Set<Product>();
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);
        modelBuilder.Entity<Product>().HasData(

            new List<Product>
            {
                new Product {Id = 1, Name = "IPhone 15", Description = "Telefon açıklaması", Price = 80000, Stock = 12,ImageUrl = "image1.jpg",IsActive =true},
                new Product {Id = 2, Name = "IPhone 16", Description = "Telefon açıklaması", Price = 95000, Stock = 20,ImageUrl = "image2.jpg",IsActive =true},
                new Product {Id = 3, Name = "IPhone 16 Pro", Description = "Telefon açıklaması", Price = 100000, Stock = 80,ImageUrl = "image3.jpg",IsActive =false}
            }
        );
    }
}