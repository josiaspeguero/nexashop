using TiendaBackend.Domain.Models;

namespace TiendaBackend.Domain.Interfaces
{
    public interface IOrdenProductoRepository
    {
        Task<bool> AgregarProductoAsync(OrdenProducto ordenProducto);
        Task<OrdenProducto?> BuscarProducto(int producto_id); 
        Task<bool> EliminarOrdenAsync(int id);
        Task<bool> ActualizarOrden(OrdenProducto ordenProducto);
    }
}
