using TiendaBackend.Domain.Models;

namespace TiendaBackend.Domain.Interfaces
{
    public interface ICarritoRepository
    {
        Task<bool> CrearCarritoAsync(Carrito carrito);
        Task<Carrito?> BuscarCarritoAsync(int id);
        Task<IEnumerable<OrdenProducto>> ListarProductosCarritoAsync(int usuarioID);
    }
}
