using TiendaBackend.Application.DTOs;
using TiendaBackend.Domain.Interfaces;
using TiendaBackend.Domain.Interfaces.Security;
using TiendaBackend.Domain.Models;

namespace TiendaBackend.Application.UseCases
{
    public class IniciarSesion
    {
        private readonly IUsuarioRepository _usuario;
        private readonly IJWTSecurity _jwt;
        private readonly ICookieSecurity _cookie;
        private readonly ILogger<IniciarSesion> _logger;

        public IniciarSesion(IUsuarioRepository usuario, IJWTSecurity jwt,
            ICookieSecurity cookie, ILogger<IniciarSesion> logger)
        {
            _usuario = usuario;
            _jwt = jwt;
            _cookie = cookie;
            _logger = logger;
        }
        public async Task<(bool status, string mensaje, object usuario)> IniciarSesionTask(IniciarSesionDTO sesionDTO)
        {
            var usuarioExistente = await _usuario.IniciarSesionAsync(sesionDTO);

            if (usuarioExistente == null)
            {
                var carro = new
                {
                    Marca = "Toyota",
                    Modelo = "Corolla",
                    Año = 2020,
                    Precio = 15000.50,
                    Disponible = true
                };
                return (false, "Usuario o contrasena incorrecta", carro);
            }
            var token = await _jwt.GenerateToken(usuarioExistente.Correo);
            _cookie.GenerateCookie(token.accesToken);
            usuarioExistente.RefreshToken = token.refreshToken;
            usuarioExistente.AccessToken = token.refreshToken;
            usuarioExistente.ExpirationDateToken = DateTime.UtcNow.AddHours(3);

            var res = await _usuario.ActualizarUsuarioAsync(usuarioExistente);
            _logger.LogError(res.ToString());

            return (true, "Bienvenido", usuarioExistente);
        }
    }
}
