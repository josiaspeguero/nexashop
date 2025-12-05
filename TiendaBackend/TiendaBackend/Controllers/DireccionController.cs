using Microsoft.AspNetCore.Mvc;
using TiendaBackend.Application.UseCases;
using TiendaBackend.Domain.Models;

namespace TiendaBackend.Controllers
{
    [Route("api/direcciones")]
    [ApiController]
    public class DireccionController : ControllerBase
    {
        private readonly AgregarDireccionEnvio _agregarDireccion;
        private readonly ActualizarDireccionEnvio _actualizarDireccion;

        public DireccionController(AgregarDireccionEnvio agregarDireccion, ActualizarDireccionEnvio actualizarDireccion)
        {
            _agregarDireccion = agregarDireccion;
            _actualizarDireccion = actualizarDireccion;
        }

        [HttpPost("agregar-direccion")]
        public async Task<ActionResult> AgregarDireccion(Direccion direccion)
        {
            var result = await _agregarDireccion.AgregarDireccionTask(direccion);
            if (!result.status)
            {
                return BadRequest(result.message);
            }
            return Ok(result.message);
        }

        [HttpPut("actualizar-direccion")]
        public async Task<ActionResult> ActualizarDireccion(Direccion direccion)
        {
            var result = await _actualizarDireccion.ActualizarDireccionTask(direccion);
            if (!result.status)
            {
                return BadRequest(result.message);
            }
            return Ok(result.message);
        }
    }

}
