using TiendaBackend.Application.DTOs;
using TiendaBackend.Domain;

namespace TiendaBackend.Application.UseCases
{
    public class RealizarPagos
    {
        private readonly HttpClient _httpClient;

        public RealizarPagos(HttpClient httpClient)
        {
            _httpClient = httpClient;
        }
        public async Task<(string mensaje, bool status)> RealizarPagoTask(OrdenDTO ordenDTO)
        {
            var response = await _httpClient.PostAsJsonAsync(
                "http://localhost:5178/api/tarjetas/pagar",
                ordenDTO);

            if (!response.IsSuccessStatusCode)
            {
                var error = await response.Content.ReadAsStringAsync();
                return ($"Error en la API destino: {error}", false);
            }
            return ("Pago realizado", true);
        }
    }
}
