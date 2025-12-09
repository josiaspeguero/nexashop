using Microsoft.AspNetCore.Mvc;
using TiendaBackend.Application.UseCases;
using TiendaBackend.Domain.Models;

namespace TiendaBackend.Controllers
{
    [ApiController]
    [Route("api/carrito")]
    public class CarritoController : ControllerBase
    {
        private readonly ListarProductosCarrito _productosCarrito;
        private readonly CrearCarrito _crearCarrito;

        public CarritoController(ListarProductosCarrito productosCarrito, CrearCarrito crearCarrito)
        {
            _productosCarrito = productosCarrito;
            _crearCarrito = crearCarrito;
        }

        [HttpPost("crear-carrito")]
        public async Task<ActionResult> CrearCarrito(Carrito carrito)
        {
            var result = await _crearCarrito.CrearCarritoTask(carrito);
            if (!result.status)
            {
                return BadRequest(new { result.message });
            }
            return Ok(result.message);
        }
        [HttpGet("mis-productos/{usuarioID}")]
        public async Task<ActionResult> VerProductos(int usuarioID)
        {
            var result = await _productosCarrito.ProductosEnCarrito(usuarioID);
            return Ok(result);
        }
    }
}
