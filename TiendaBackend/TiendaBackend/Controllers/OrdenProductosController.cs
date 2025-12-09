using Microsoft.AspNetCore.Mvc;
using TiendaBackend.Application.UseCases;
using TiendaBackend.Domain.Models;

namespace TiendaBackend.Controllers
{
    [ApiController]
    [Route("api/ordenes")]
    public class OrdenProductosController : ControllerBase
    {
        private readonly AgregarOrdenAlCarrito _agregarOrden;

        public OrdenProductosController(AgregarOrdenAlCarrito agregarOrden)
        {
            _agregarOrden = agregarOrden;
        }
        [HttpPost("agregar-producto")]
        public async Task<ActionResult> AgregarProductos(OrdenProducto ordenProducto)
        {
            var res = await _agregarOrden.AgregarOrdenTask(ordenProducto);
            if (!res.status)
            {
                return BadRequest("No se pudo agregar el producto");
            }
            return Ok(res.message);
        }
    }
}
