using System.Security.Cryptography.X509Certificates;
using TiendaBackend.Domain.Interfaces;
using TiendaBackend.Domain.Models;

namespace TiendaBackend.Application.UseCases
{
    public class ActualizarDireccionEnvio
    {
        private readonly IDireccionesRepository _direcciones;
        public ActualizarDireccionEnvio(IDireccionesRepository direcciones)
        {
            _direcciones = direcciones;
        }
        public async Task<(bool status, string message)> ActualizarDireccionTask(Direccion direccion)
        {
            var result = await _direcciones.ActualizarDireccionAsync(direccion);
            if (!result)
            {
                return (false, "No se pudo actualizar tu direccion");
            }
            return (true, "Direccion Actualizada");
        }
    }
}
