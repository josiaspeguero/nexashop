using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using System.Text.Json;
using TiendaBackend.Application.UseCases;
using TiendaBackend.Data.Repositories;
using TiendaBackend.Domain;
using TiendaBackend.Domain.Interfaces;
using TiendaBackend.Domain.Interfaces.Security;
using TiendaBackend.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddHttpContextAccessor();

//interfaces
builder.Services.AddScoped<IUsuarioRepository, UsuarioRepository>();
builder.Services.AddScoped<IDireccionesRepository, DireccionesRepository>();
builder.Services.AddScoped<IProductoRepository, ProductosRepository>();
builder.Services.AddScoped<ICodigosSeguridadRepository, CodigoSeguridadRepository>();
builder.Services.AddScoped<IEnviarMensaje, EnviarMensaje>();
builder.Services.AddScoped<IJWTSecurity, JWTGenerate>();
builder.Services.AddScoped<ICookieSecurity, CookieGenerator>();
builder.Services.AddScoped<IOrdenProductoRepository, OrdenProductoRespository>();
builder.Services.AddScoped<ICarritoRepository, CarritoRepository>();

//use case
builder.Services.AddScoped<CrearCuenta>();
builder.Services.AddScoped<IniciarSesion>();
builder.Services.AddScoped<ConnectionService>();
builder.Services.AddScoped<ListarProductos>();
builder.Services.AddScoped<RealizarPagos>();
builder.Services.AddScoped<HttpClient>();
builder.Services.AddScoped<AgregarDireccionEnvio>();
builder.Services.AddScoped<ActualizarDireccionEnvio>();
builder.Services.AddScoped<ListarProductosCarrito>();
builder.Services.AddScoped<CrearCarrito>();
builder.Services.AddScoped<AgregarOrdenAlCarrito>();

//mysql connection

var connection = new MySqlFile(builder.Configuration.GetConnectionString("defaultConnection"));
builder.Services.AddSingleton(connection);

//jwt security
builder.Services.AddAuthentication(options =>
{
    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
}).AddJwtBearer(options =>
{
    options.TokenValidationParameters = new TokenValidationParameters
    {
        ValidateLifetime = true,
        ValidateIssuer = true,
        ValidateAudience = true,
        ValidateIssuerSigningKey = true,
        ValidIssuer = builder.Configuration["jwt:issuer"],
        ValidAudience = builder.Configuration["jwt:audience"],
        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(
            builder.Configuration["jwt:key"]))
    };

    options.Events = new JwtBearerEvents
    {
        OnMessageReceived = context =>
        {
            context.Token = context.Request.Cookies["AuthToken"];
            return Task.CompletedTask;
        }
    };
});

//cors
builder.Services.AddCors(options =>
{
    options.AddPolicy("global", option =>
    {
        option.WithOrigins("http://localhost:3000")
        .AllowCredentials()
        .AllowAnyHeader()
        .AllowAnyMethod();
    });
});

///builder!!!!!!

var app = builder.Build();

//status code pages
app.UseStatusCodePages(async context =>
{
    if (context.HttpContext.Response.StatusCode == 401)
    {
        context.HttpContext.Response.ContentType = "application/json";
        var mensaje = JsonSerializer.Serialize(new
        {
            mensaje = "Debe estar autenticado para acceder a esta seccion"
        });
        await context.HttpContext.Response.WriteAsync(mensaje);
    }
});

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthentication();

app.UseCors("global");

app.UseAuthorization();

app.MapControllers();

app.Run();
