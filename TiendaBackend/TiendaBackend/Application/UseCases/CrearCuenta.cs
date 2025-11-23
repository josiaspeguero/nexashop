using TiendaBackend.Domain.Interfaces;
using TiendaBackend.Domain.Models;

namespace TiendaBackend.Application.UseCases
{
    public class CrearCuenta
    {
        private readonly IUsuarioRepository _usuario;
        private readonly ICodigosSeguridadRepository _codigos;
        private readonly IEnviarMensaje _enviarMensaje;
        private readonly Random _random = new Random();

        public CrearCuenta(IUsuarioRepository usuario, ICodigosSeguridadRepository codigos, IEnviarMensaje enviarMensaje)
        {
            _usuario = usuario;
            _codigos = codigos;
            _enviarMensaje = enviarMensaje;
        }
        public async Task<(bool status, string mensaje)> CrearCuentaTask(Usuario usuario)
        {
            var res = await _usuario.BuscarUsuarioAsync(usuario.Correo);
            if (res != null)
            {
                return (false, "Ya existe un usuario con esa cuenta");
            }
            var usuarioCreado = await _usuario.GuardarUsuarioAsync(usuario);
            if (!usuarioCreado)
            {
                return (false, "Ocurrido un error al crear el usuario");
            }

            await _enviarMensaje.EnviarMail(usuario.Correo, $"Hola {usuario.NombreCompleto}",
                $"Bienvenido");

            return (true, "Usuario Creado Correctamente");
        }
    }
}
