using Dapper;
using TiendaBackend.Domain.Interfaces;
using TiendaBackend.Domain.Models;
using TiendaBackend.Services;

namespace TiendaBackend.Data.Repositories
{
    public class CarritoRepository : ICarritoRepository
    {
        private readonly ConnectionService _connection;

        public CarritoRepository(ConnectionService connection)
        {
            _connection = connection;
        }
        public async Task<Carrito?> BuscarCarritoAsync(int id)
        {
            var sql = @"select * from carritos where usuario_id=@Id";
            return await _connection.Connection(c => c.QueryFirstOrDefaultAsync<Carrito>(sql, new
            {
                Id = id
            }));
        }

        public async Task<bool> CrearCarritoAsync(Carrito carrito)
        {
            var sql = @"insert into carritos (usuario_id, fecha_creacion) 
                    values(@UsuarioID, @FechaCreacion)";
            var res = await _connection.Connection(c => c.ExecuteAsync(sql, new
            {
                carrito.UsuarioID,
                carrito.FechaCreacion

            }));
            return res > 0;
        }

        public async Task<IEnumerable<OrdenProducto>> ListarProductosCarritoAsync(int usuarioID)
        {
            var sql2 = @"select * from carritos where usuario_id = @UsuarioID";
            var carritoUsuario = await _connection.Connection(c => c.QueryFirstOrDefaultAsync<Carrito>(sql2, new
            {
                UsuarioID = usuarioID
            }));

            if (carritoUsuario != null)
            {
                var sql = @"select 
                        id,
                        carrito_id as CarritoID,
                        producto_id as ProductoID,
                        descripcion,
                        photo,
                        nombre_producto as NombreProducto,
                        cantidad,
                        isComprado,
                        fecha_agregado as FechaAgregado,
                        precio 
                        from orden_productos where carrito_id=@id";
                return await _connection.Connection(c => c.QueryAsync<OrdenProducto>(sql, new
                {
                    Id = carritoUsuario!.Id
                }));
            }
            else
            {
                throw new InvalidOperationException("No tiene un carrito");
            }

        }

    }
}
