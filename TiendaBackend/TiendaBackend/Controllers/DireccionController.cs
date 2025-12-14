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
        private readonly ListarDirecciones _listarDirecciones;

        public DireccionController(AgregarDireccionEnvio agregarDireccion, ActualizarDireccionEnvio actualizarDireccion,
            ListarDirecciones listarDirecciones)
        {
            _agregarDireccion = agregarDireccion;
            _actualizarDireccion = actualizarDireccion;
            _listarDirecciones = listarDirecciones;
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
        [HttpGet("mis-direcciones/{usuarioId}")]
        public async Task<ActionResult> MisDirecciones(int usuarioId)
        {
            var res = await _listarDirecciones.ListarDireccionesTask(usuarioId);
            return Ok(res);
        }
    }

}
