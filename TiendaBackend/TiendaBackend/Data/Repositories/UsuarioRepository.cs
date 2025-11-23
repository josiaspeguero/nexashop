using Dapper;
using Microsoft.AspNetCore.Connections;
using TiendaBackend.Application.DTOs;
using TiendaBackend.Domain.Interfaces;
using TiendaBackend.Domain.Models;
using TiendaBackend.Services;

namespace TiendaBackend.Data.Repositories
{

    public class UsuarioRepository : IUsuarioRepository
    {
        private readonly ConnectionService _connection;

        public UsuarioRepository(ConnectionService connection)
        {
            _connection = connection;
        }
        public async Task<Usuario> ActualizarUsuarioAsync(Usuario usuario)
        {
            var sql = @"update usuarios set  RefreshToken =@RefreshToken, 
                        AccessToken=@AccessToken, ExpirationDateToken=@ExpirationDateToken 
                         where correo =@Correo ";

            var res = await _connection.Connection(c => c.ExecuteAsync(sql, new
            {
                usuario.RefreshToken,
                usuario.AccessToken,
                usuario.ExpirationDateToken,
                usuario.Correo
            }));
            if (res < 0)
            {
                throw new Exception("No se pudo actualizar el user");
            }
            return usuario;
        }

        public async Task<Usuario?> BuscarUsuarioAsync(string correo)
        {
            var sql = @"select * from usuarios where correo=@correo";
            return await _connection.Connection(c => c.QueryFirstOrDefaultAsync<Usuario>(sql, new
            {
                correo
            }));
        }

        public Task<bool> GuardarUsuarioAsync()
        {
            throw new NotImplementedException();
        }

        public async Task<bool> GuardarUsuarioAsync(Usuario usuario)
        {
            var sql = @"insert into usuarios( nombre_completo,  fecha_nacimiento, correo, contrasena, correo_secundario) 
                      values(@nombre_completo, @fecha_nacimiento, @Correo, @Contrasena, @correo_secundario)";
            var res = await _connection.Connection(c => c.ExecuteAsync(sql, new
            {
                nombre_completo = usuario.NombreCompleto,
                fecha_nacimiento = usuario.FechaNacimiento,
                correo = usuario.Correo,
                contrasena = usuario.Contrasena,
                correo_secundario = usuario.CorreoSecundario
            }));

            return res > 0;
        }

        public async Task<Usuario?> IniciarSesionAsync(IniciarSesionDTO sesionDTO)
        {
            var sql = @"
select  
    nombre_completo AS NombreCompleto,
    fecha_nacimiento AS FechaNacimiento,
    correo AS Correo,
    contrasena AS Contrasena,
    correo_secundario AS CorreoSecundario,
    refreshToken AS RefreshToken,
    accessToken AS AccessToken,
    expirationDateToken AS ExpirationDateToken,
    id
from usuarios 
where correo=@Correo and contrasena=@Contrasena
";
            return await _connection.Connection(c => c.QueryFirstOrDefaultAsync<Usuario>(sql, new
            {
                sesionDTO.Correo,
                sesionDTO.Contrasena
            }));
        }
    }
}
