using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using TiendaBackend.Application.DTOs;
using TiendaBackend.Application.UseCases;
using TiendaBackend.Domain.Models;

namespace TiendaBackend.Controllers
{
    [ApiController]
    [Route("/usuarios")]
    public class UsuarioController : ControllerBase
    {
        private readonly CrearCuenta _crearCuenta;
        private readonly IniciarSesion _iniciarSesion;

        public UsuarioController(CrearCuenta crearCuenta, IniciarSesion iniciarSesion)
        {
            _crearCuenta = crearCuenta;
            _iniciarSesion = iniciarSesion;
        }

        [HttpPost("crear-cuenta")]
        public async Task<ActionResult> CrearCuenta(Usuario usuario)
        {
            var res = await _crearCuenta.CrearCuentaTask(usuario);
            if (!res.status)
            {
                return BadRequest(res.mensaje);
            }
            return Ok(res.mensaje);
        }

        [HttpPost("iniciar-sesion")]
        public async Task<ActionResult> IniciarSesion(IniciarSesionDTO sesionDTO)
        {
            var res = await _iniciarSesion.IniciarSesionTask(sesionDTO);
            if (!res.status)
            {
                return NotFound(res.mensaje);
            }
            return Ok(res.usuario);
        }
    }
}
