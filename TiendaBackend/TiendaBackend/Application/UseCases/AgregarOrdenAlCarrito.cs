using TiendaBackend.Domain.Interfaces;
using TiendaBackend.Domain.Models;

namespace TiendaBackend.Application.UseCases
{
    public class AgregarOrdenAlCarrito
    {
        private readonly IOrdenProductoRepository _ordenProducto;

        public AgregarOrdenAlCarrito(IOrdenProductoRepository ordenProducto)
        {
            _ordenProducto = ordenProducto;
        }
        public async Task<(bool status, string message)> AgregarOrdenTask(OrdenProducto ordenProducto)
        {
            var result = await _ordenProducto.BuscarProducto(ordenProducto.ProductoID);
            if (result == null)
            {
                var productoAgregado = await _ordenProducto.AgregarProductoAsync(ordenProducto);
                if (!productoAgregado)
                {
                    return (false, "no se pudo agregar el producto");
                }
                return (true, "producto agregado");
            }
            else
            {
                var actualizarProducto = await _ordenProducto.ActualizarOrden(ordenProducto);
                if (!actualizarProducto)
                {
                    return (false, "no se pudo actualizar el producto");
                }
                return (true, "producto agregado");
            }
        }
    }
}
