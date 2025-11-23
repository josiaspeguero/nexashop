namespace TiendaBackend.Domain.Interfaces
{
    public interface IEnviarMensaje
    {
        Task EnviarMail(string correoDestino, string cabecera, string cuerpo);
    }
}
