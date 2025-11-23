using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TiendaBackend.Application.DTOs;
using TiendaBackend.Application.UseCases;

namespace TiendaBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductosController : ControllerBase
    {
        private readonly ListarProductos _listarProductos;
        private readonly RealizarPagos _realizarPagos;

        public ProductosController(ListarProductos listarProductos, RealizarPagos realizarPagos)
        {
            _listarProductos = listarProductos;
            _realizarPagos = realizarPagos;
        }
        [HttpGet]
        public async Task<ActionResult> ListarProductos()
        {
            var res = await _listarProductos.ListarProductosTask();
            return Ok(res);
        }
        [HttpGet("categoria/{categoria}")]
        public async Task<ActionResult> ListarProductosCategoria(string categoria)
        {
            var res = await _listarProductos.ListarProductosCategoria(categoria);
            return Ok(res);
        }

        [HttpGet("id/{id}")]
        public async Task<ActionResult> ListarProductosID(int id)
        {
            var res = await _listarProductos.ListarProductoPorID(id);
            return Ok(res);
        }

        [Authorize]
        [HttpPost("pagar")]
        public async Task<ActionResult> PagarOrden([FromBody] OrdenDTO ordenDTO)
        {
            var res = await _realizarPagos.RealizarPagoTask(ordenDTO);
            return Ok(res.mensaje);
        }
    }
}
