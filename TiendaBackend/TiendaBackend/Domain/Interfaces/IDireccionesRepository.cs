using TiendaBackend.Domain.Models;

namespace TiendaBackend.Domain.Interfaces
{
    public interface IDireccionesRepository
    {
        Task<bool> AgregarDireccionAsync(Direccion direccion);
        Task<bool> ActualizarDireccionAsync(Direccion direccion);
    }
}
