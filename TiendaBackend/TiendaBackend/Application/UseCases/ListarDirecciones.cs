using TiendaBackend.Domain.Interfaces;
using TiendaBackend.Domain.Models;

namespace TiendaBackend.Application.UseCases
{
    public class ListarDirecciones
    {
        private readonly IDireccionesRepository _direcciones;

        public ListarDirecciones(IDireccionesRepository direcciones)
        {
            _direcciones = direcciones;
        }
        public async Task<IEnumerable<Direccion?>> ListarDireccionesTask(int usuarioId)
        {
            var res = await _direcciones.MisDireccionesAsync(usuarioId);
            return res;
        }
    }
}
