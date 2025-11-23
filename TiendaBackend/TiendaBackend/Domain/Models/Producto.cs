namespace TiendaBackend.Domain.Models
{
    public class Producto
    {
        public int Id { get; set; }
        public string Nombre { get; set; } = string.Empty;
        public string? Categoria { get; set; }
        public string? Descripcion { get; set; }
        public string PhotoUrl { get; set; } = string.Empty;
        public decimal Precio { get; set; }
        public DateTime FechaEntrada { get; set; }
        public int Stock { get; set; }
    }
}
