namespace TiendaBackend.Domain.Models
{
    public class Direccion
    {
        public int Id { get; set; }
        public int UsuarioId { get; set; }
        public string DireccionTexto { get; set; } = string.Empty;
        public string? CodigoPostal { get; set; }
    }
}
