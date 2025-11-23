namespace TiendaBackend.Domain.Models
{
    public class CodigoSeguridad
    {
        public int Id { get; set; }
        public string Codigo { get; set; } = string.Empty;
        public int UsuarioID { get; set; }
        public DateTime FechaExpiracion { get; set; } = DateTime.Now.AddMinutes(10);
        public bool IsUsado { get; set; }
    }
}
