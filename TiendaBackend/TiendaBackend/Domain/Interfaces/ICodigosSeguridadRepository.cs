using TiendaBackend.Domain.Models;

namespace TiendaBackend.Domain.Interfaces
{
    public interface ICodigosSeguridadRepository
    {
        Task AgregarCodigoAsync(CodigoSeguridad codigoSeguridad);
    }
}
