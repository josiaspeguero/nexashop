using TiendaBackend.Application.DTOs;
using TiendaBackend.Domain.Models;

namespace TiendaBackend.Domain.Interfaces
{
    public interface IUsuarioRepository
    {
        Task<bool> GuardarUsuarioAsync(Usuario usuario);
        Task<Usuario> ActualizarUsuarioAsync(Usuario usuario);
        Task<Usuario?> BuscarUsuarioAsync(string correo);
        Task<Usuario?> IniciarSesionAsync(IniciarSesionDTO sesionDTO);
    }
}
