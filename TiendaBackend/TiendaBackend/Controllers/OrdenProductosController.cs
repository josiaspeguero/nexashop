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
        private readonly EliminaProductoDelCarrito _eliminaProductoDelCarrito;

        public OrdenProductosController(AgregarOrdenAlCarrito agregarOrden, EliminaProductoDelCarrito eliminaProductoDelCarrito)
        {
            _agregarOrden = agregarOrden;
            _eliminaProductoDelCarrito = eliminaProductoDelCarrito;
        }
        [HttpPost("agregar-producto")]
        public async Task<ActionResult> AgregarProductos([FromBody] OrdenProducto ordenProducto)
        {
            var res = await _agregarOrden.AgregarOrdenTask(ordenProducto);
            if (!res.status)
            {
                return BadRequest("No se pudo agregar el producto");
            }
            return Ok(res.message);
        }

        [HttpDelete("{ordenId}")]
        public async Task<ActionResult> eliminarOrden(int ordenId)
        {
            var res = await _eliminaProductoDelCarrito.eliminarOrdenTask(ordenId);
            if (!res.status)
            {
                return BadRequest(res.message);
            }
            return Ok(res.message);
        }
    }
}
