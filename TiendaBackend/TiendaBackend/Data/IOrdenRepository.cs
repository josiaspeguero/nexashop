using TiendaBackend.Application.DTOs;

namespace TiendaBackend.Data
{
    public interface IOrdenRepository
    {
        Task<HttpResponseMessage> PagarOrdenAsync(OrdenDTO orden);
    }
}
