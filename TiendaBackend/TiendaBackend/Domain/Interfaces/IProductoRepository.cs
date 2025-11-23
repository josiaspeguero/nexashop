using TiendaBackend.Domain.Models;

namespace TiendaBackend.Domain.Interfaces
{
    public interface IProductoRepository
    {
        Task<IEnumerable<Producto>> GetAllAsync();
        Task<IEnumerable<Producto?>> GetByCategoryAsync(string categoria);
        Task<Producto?> GetProductoById(int id);
        Task<bool> AgregarProductoAsync(Producto producto);
        Task<bool> ActualizarProductoAsync(Producto producto);
        Task<bool> EliminarProductoAsync(Producto producto);
    }
}
