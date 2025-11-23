namespace TiendaBackend.Domain.Interfaces.Security
{
    public interface IJWTSecurity
    {
        Task<(string accesToken, string refreshToken)> GenerateToken(string username);
    }
}
