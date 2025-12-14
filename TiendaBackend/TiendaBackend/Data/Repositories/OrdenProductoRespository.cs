using Dapper;
using TiendaBackend.Domain.Interfaces;
using TiendaBackend.Domain.Models;
using TiendaBackend.Services;

namespace TiendaBackend.Data.Repositories
{
    public class OrdenProductoRespository : IOrdenProductoRepository
    {
        private readonly ConnectionService _connection;

        public OrdenProductoRespository(ConnectionService connection)
        {
            _connection = connection;
        }
        public async Task<bool> ActualizarOrden(OrdenProducto ordenProducto)
        {
            var sql1 = @"select cantidad from orden_productos where producto_id = @ProductoID";
            var productoExistente = await _connection.Connection(c => c.QueryFirstOrDefaultAsync<OrdenProducto?>(sql1, new
            {
                ordenProducto.ProductoID
            }));
            var sql2 = @"update orden_productos set cantidad=@Cantidad where producto_id=@ProductoID";
            var res = await _connection.Connection(c => c.ExecuteAsync(sql2, new
            {
                Cantidad = productoExistente!.Cantidad + 1,
                ordenProducto.ProductoID,
            }));
            return res > 0;
        }

        public async Task<bool> AgregarProductoAsync(OrdenProducto ordenProducto)
        {
            var sql = @"insert into orden_productos(
                        carrito_id, producto_id, nombre_producto, cantidad, isComprado, fecha_agregado, precio, descripcion, photo) 
                        values(@CarritoID, @ProductoID,@NombreProducto, @Cantidad, @IsComprado, @FechaAgregado, @Precio, @Descripcion, @Photo)";

            var res = await _connection.Connection(c => c.ExecuteAsync(sql, new
            {
                ordenProducto.CarritoID,
                ordenProducto.ProductoID,
                ordenProducto.NombreProducto,
                ordenProducto.Cantidad,
                ordenProducto.IsComprado,
                ordenProducto.FechaAgregado,
                ordenProducto.Precio,
                ordenProducto.Descripcion,
                ordenProducto.Photo,
                
            }));
            return res > 0;
        }

        public async Task<OrdenProducto?> BuscarProducto(int producto_id)
        {
            var sql = @"select * from orden_productos where producto_id = @Id";
            return await _connection.Connection(c => c.QueryFirstOrDefaultAsync<OrdenProducto>(sql, new
            {
                Id = producto_id
            }));
        }

        public async Task<bool> EliminarOrdenAsync(int id)
        {
            var sql = @"delete from orden_productos where id = @Id";
            var res = await _connection.Connection(c => c.ExecuteAsync(sql, new
            {
                Id = id
            }));
            return res > 0;
        }
    }
}
