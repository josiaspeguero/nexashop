namespace TiendaBackend.Domain.Interfaces.Security
{
    public interface ICookieSecurity
    {
        void GenerateCookie(string token);
    }
}
