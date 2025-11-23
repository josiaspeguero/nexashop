using TiendaBackend.Data.Repositories;
using TiendaBackend.Domain.Interfaces;
using TiendaBackend.Domain.Models;

namespace TiendaBackend.Application.UseCases
{
    public class ListarProductos
    {
        private readonly IProductoRepository _productos;

        public ListarProductos(IProductoRepository productos)
        {
            _productos = productos;
        }

        public async Task<IEnumerable<Producto>> ListarProductosTask()
        {
            var res = await _productos.GetAllAsync();
            return res;
        }

        public async Task<IEnumerable<Producto?>> ListarProductosCategoria(string categoria)
        {
            return await _productos.GetByCategoryAsync(categoria);
        }

        public async Task<Producto?> ListarProductoPorID(int id)
        {
            return await _productos.GetProductoById(id);
        }
    }
}
