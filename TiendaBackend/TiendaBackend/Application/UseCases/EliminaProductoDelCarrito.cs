using TiendaBackend.Domain.Interfaces;

namespace TiendaBackend.Application.UseCases
{
    public class EliminaProductoDelCarrito
    {
        private readonly IOrdenProductoRepository _ordenProducto;

        public EliminaProductoDelCarrito(IOrdenProductoRepository ordenProducto)
        {
            _ordenProducto = ordenProducto;
        }
        public async Task<(bool status, string message)> eliminarOrdenTask(int id)
        {
            var res = await _ordenProducto.EliminarOrdenAsync(id);
            if (!res)
            {
                return (false, "No se pudo eliminar");
            }
            return (true, "producto eliminado");
        }
    }
}
