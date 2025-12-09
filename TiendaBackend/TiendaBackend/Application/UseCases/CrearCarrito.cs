using TiendaBackend.Domain.Interfaces;
using TiendaBackend.Domain.Models;

namespace TiendaBackend.Application.UseCases
{
    public class CrearCarrito
    {
        private readonly ICarritoRepository _carrito;

        public CrearCarrito(ICarritoRepository carrito)
        {
            _carrito = carrito;
        }
        public async Task<(bool status, string message)> CrearCarritoTask(Carrito carrito)
        {
            var result = await _carrito.BuscarCarritoAsync(carrito.UsuarioID);
            if (result == null)
            {
                await _carrito.CrearCarritoAsync(carrito);
                return (true, "Carrito creado");
            }
            else
            {
                return (true, "Ya tiene un carrito");
            }

        }
    }
}
