using Dapper;
using TiendaBackend.Domain.Interfaces;
using TiendaBackend.Domain.Models;
using TiendaBackend.Services;

namespace TiendaBackend.Data.Repositories
{
    public class CodigoSeguridadRepository : ICodigosSeguridadRepository
    {
        private readonly ConnectionService _connection;

        public CodigoSeguridadRepository(ConnectionService connection)
        {
            _connection = connection;
        }
        public async Task AgregarCodigoAsync(CodigoSeguridad codigoSeguridad)
        {
            var sql = @"INSERT INTO CodigosVerificacion(usuario_id, codigo, fecha_expiracion, codigo_usado)
                VALUES(@usuario_id, @codigo, @fecha_expiracion, @codigo_usado)";

            await _connection.Connection(c => c.ExecuteAsync(sql, new
            {
                usuario_id = codigoSeguridad.UsuarioID,
                codigo = codigoSeguridad.Codigo,
                fecha_expiracion = codigoSeguridad.FechaExpiracion,
                codigo_usado = codigoSeguridad.IsUsado
            }));
        }

    }
}
