namespace TiendaBackend.Domain.Models
{
    public class Usuario
    {
        public int Id { get; set; }
        public string NombreCompleto { get; set; } = string.Empty;
        public DateTime FechaNacimiento { get; set; }
        public string Correo { get; set; } = string.Empty;
        public string Contrasena { get; set; } = string.Empty;
        public string? CorreoSecundario { get; set; }
        public string? RefreshToken { get; set; }
        public string? AccessToken { get; set; }
        public DateTime? ExpirationDateToken { get; set; }
    }
}
