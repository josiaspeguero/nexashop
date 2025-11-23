using Microsoft.IdentityModel.Tokens;
using System.Net;
using System.Net.Mail;
using TiendaBackend.Domain.Interfaces;

namespace TiendaBackend.Services
{
    public class EnviarMensaje : IEnviarMensaje
    {
        private readonly IConfiguration _configuration;
        private readonly ILogger<EnviarMensaje> _logger;

        public EnviarMensaje(IConfiguration configuration, ILogger<EnviarMensaje> logger)
        {
            _configuration = configuration;
            _logger = logger;
        }
        public async Task EnviarMail(string correoDestino, string cabecera, string cuerpo)
        {
            try
            {
                var correoEmisor = _configuration.GetValue<string>("SMTP_CLIENT:USER");
                var credenciales = _configuration.GetValue<string>("SMTP_CLIENT:PASSWORD");
                var host = _configuration.GetValue<string>("SMTP_CLIENT:HOST");
                var port = _configuration.GetValue<int>("SMTP_CLIENT:PORT");

                using (var smtpClient = new SmtpClient(host, port))
                {
                    smtpClient.EnableSsl = true;
                    smtpClient.UseDefaultCredentials = false;
                    smtpClient.Credentials = new NetworkCredential(correoEmisor, credenciales);

                    using (var mensaje = new MailMessage(correoEmisor!, correoDestino, cabecera, cuerpo))
                    {
                        await smtpClient.SendMailAsync(mensaje);
                    }
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
            }
        }
    }
}
