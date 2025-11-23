namespace TiendaBackend.Domain.Interfaces.MySql
{
    public interface IConnectionHandler
    {
        Task<T> Connection<T>(Func<Task<T>> action);
    }
}
