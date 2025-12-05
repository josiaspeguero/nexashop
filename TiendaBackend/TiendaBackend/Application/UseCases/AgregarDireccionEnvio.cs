using TiendaBackend.Domain.Interfaces;
using TiendaBackend.Domain.Models;

namespace TiendaBackend.Application.UseCases
{
    public class AgregarDireccionEnvio
    {
        private readonly IDireccionesRepository _direcciones;

        public AgregarDireccionEnvio(IDireccionesRepository direcciones)
        {
            _direcciones = direcciones;
        }
        public async Task<(bool status, string message)> AgregarDireccionTask(Direccion direccion)
        {
            var result = await _direcciones.AgregarDireccionAsync(direccion);
            if (!result)
            {
                return (false, "No se puedo agregar la direccion");
            }
            return (true, "Direccion Agregada Correctamente");
        }
    }
}
