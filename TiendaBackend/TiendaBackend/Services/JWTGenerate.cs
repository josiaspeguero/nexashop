using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using TiendaBackend.Domain.Interfaces.Security;

namespace TiendaBackend.Services
{
    public class JWTGenerate : IJWTSecurity
    {
        private readonly IConfiguration _configuration;

        public JWTGenerate(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        public Task<(string accesToken, string refreshToken)> GenerateToken(string username)
        {
            var jwtSettings = _configuration.GetSection("jwt");
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwtSettings["key"]!));

            var claims = new[]
            {
                new Claim(JwtRegisteredClaimNames.Name, username),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())
            };

            var token = new JwtSecurityToken(
                issuer: jwtSettings["issuer"],
                audience: jwtSettings["audience"],
                claims: claims,
                expires: DateTime.UtcNow.AddHours(3),
                signingCredentials: new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256)
                );

            var acces = new JwtSecurityTokenHandler().WriteToken(token);
            var refresh = Guid.NewGuid().ToString();

            return Task.FromResult((acces, refresh));
        }
    }
}
