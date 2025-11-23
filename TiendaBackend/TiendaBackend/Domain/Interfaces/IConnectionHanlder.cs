namespace TiendaBackend.Domain.Interfaces
{
    public interface IConnectionHanlder
    {
        Task<T> Connection<T>(Func<Task<T>> action);
    }
}
