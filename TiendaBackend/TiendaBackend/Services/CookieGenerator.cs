using TiendaBackend.Domain.Interfaces.Security;

namespace TiendaBackend.Services
{
    public class CookieGenerator : ICookieSecurity
    {
        private readonly IHttpContextAccessor _httpContext;

        public CookieGenerator(IHttpContextAccessor httpContext)
        {
            _httpContext = httpContext;
        }
        public void GenerateCookie(string token)
        {
            var context = _httpContext;
            if (context.HttpContext == null)
            {
                return;
            }

            context.HttpContext.Response.Cookies.Append("AuthToken", token, new CookieOptions
            {
                HttpOnly = false,
                Secure = true,
                SameSite = SameSiteMode.None,
                Expires = DateTime.UtcNow.AddHours(3)
            });
        }
    }
}
