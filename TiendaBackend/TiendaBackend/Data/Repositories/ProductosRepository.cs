using Dapper;
using TiendaBackend.Domain.Interfaces;
using TiendaBackend.Domain.Models;
using TiendaBackend.Services;

namespace TiendaBackend.Data.Repositories
{
    public class ProductosRepository : IProductoRepository
    {
        private readonly ConnectionService _connection;

        public ProductosRepository(ConnectionService connection)
        {
            _connection = connection;
        }
        public Task<bool> ActualizarProductoAsync(Producto producto)
        {
            throw new NotImplementedException();
        }

        public Task<bool> AgregarProductoAsync(Producto producto)
        {
            throw new NotImplementedException();
        }

        public Task<bool> EliminarProductoAsync(Producto producto)
        {
            throw new NotImplementedException();
        }

        public async Task<IEnumerable<Producto>> GetAllAsync()
        {
            var sql = @"select Nombre, Categoria, Descripcion, 
                        Photo_Url as PhotoUrl, Precio, Fecha_Entrada as FechaEntrada, Stock from productos";
            return await _connection.Connection(c => c.QueryAsync<Producto>(sql));
        }

        public async Task<IEnumerable<Producto?>> GetByCategoryAsync(string categoria)
        {
            var sql = @"select * from productos where categoria =@Categoria";
            return await _connection.Connection(c => c.QueryAsync<Producto>(sql, new
            {
                Categoria = categoria
            }));
        }

        public async Task<Producto?> GetProductoById(int id)
        {
            var sql = @"select Nombre, Categoria, Descripcion, 
                        Photo_Url as PhotoUrl, Precio, Fecha_Entrada as FechaEntrada, Stock from productos where id=@Id";
            return await _connection.Connection(c => c.QueryFirstOrDefaultAsync<Producto>(sql, new
            {
                Id = id
            }));
        }
    }
}
