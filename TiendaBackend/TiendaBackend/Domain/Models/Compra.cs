namespace TiendaBackend.Domain.Models
{
    public class Compra
    {
        public int Id { get; set; }
        public int UsuarioId { get; set; }
        public decimal TotalMontoCompra { get; set; }
        public int TotalPuntosGanados { get; set; }
        public DateTime FechaCompra { get; set; }
    }
}
