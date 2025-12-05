using Dapper;
using TiendaBackend.Domain.Interfaces;
using TiendaBackend.Domain.Models;
using TiendaBackend.Services;

namespace TiendaBackend.Data.Repositories
{
    public class DireccionesRepository : IDireccionesRepository
    {
        private readonly ConnectionService _connection;

        public DireccionesRepository(ConnectionService connection)
        {
            _connection = connection;
        }
        public async Task<bool> ActualizarDireccionAsync(Direccion direccion)
        {
            var sql = @"update direcciones set direccion=@DireccionTexto, 
                        codigo_postal=@CodigoPostal where usuario_id=@UsuarioId";

            var result = await _connection.Connection(c => c.ExecuteAsync(sql, new
            {
                direccion.DireccionTexto,
                direccion.CodigoPostal,
                direccion.UsuarioId
            }));
            return result > 0;
        }

        public async Task<bool> AgregarDireccionAsync(Direccion direccion)
        {
            var sql = @"insert into direcciones(usuario_id, direccion, codigo_postal) 
                      values(@UsuarioId, @DireccionTexto, @CodigoPostal)";

            var result = await _connection.Connection(c => c.ExecuteAsync(sql, new
            {
                direccion.UsuarioId,
                direccion.DireccionTexto,
                direccion.CodigoPostal
            }));

            return result > 0;
        }
    }
}
