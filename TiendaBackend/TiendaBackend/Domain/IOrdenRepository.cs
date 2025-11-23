using TiendaBackend.Application.DTOs;

namespace TiendaBackend.Domain
{
    public interface IOrdenRepository
    {
        Task<HttpResponseMessage> PagarOrdenAsync(OrdenDTO orden);
    }
}
