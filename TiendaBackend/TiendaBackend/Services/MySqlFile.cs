namespace TiendaBackend.Services
{
    public class MySqlFile
    {
        public readonly string _ConnectionString;
        public MySqlFile(string connectionString)
        {
            _ConnectionString = connectionString;
        }
    }
}
