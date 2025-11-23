using MySql.Data.MySqlClient;
using TiendaBackend.Domain.Interfaces.MySql;

namespace TiendaBackend.Services
{
    public class ConnectionService 
    {
        private string _connectionString;
        public ConnectionService(MySqlFile config)
        {
            _connectionString = config._ConnectionString;
        }

        public MySqlConnection DbContext()
        {
            return new MySqlConnection(_connectionString);
        }
        public async Task<T> Connection<T>(Func<MySqlConnection, Task<T>> action)
        {
            using var connection = DbContext();
            await connection.OpenAsync();
            return await action(connection);
        }
    }
}
