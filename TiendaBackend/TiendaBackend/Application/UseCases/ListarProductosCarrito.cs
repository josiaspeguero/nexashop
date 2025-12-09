using TiendaBackend.Domain.Interfaces;
using TiendaBackend.Domain.Models;

namespace TiendaBackend.Application.UseCases
{
    public class ListarProductosCarrito
    {
        private readonly ICarritoRepository _productosEnCarrito;

        public ListarProductosCarrito(ICarritoRepository productosEnCarrito)
        {
            _productosEnCarrito = productosEnCarrito;
        }

        public async Task<IEnumerable<OrdenProducto>> ProductosEnCarrito(int usuarioID)
        {
            var result = await _productosEnCarrito.ListarProductosCarritoAsync(usuarioID);
            return result;
        }
    }
}
