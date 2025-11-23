namespace TiendaBackend.Application.DTOs
{
    public class OrdenDTO
    {
        public int CuentaEmisora { get; set; }
        public int CuentaReceptora { get; set; }
        public string Razon { get; set; } = string.Empty;
        public decimal Monto { get; set; }
        public DateTime FechaTransaccion { get; set; }
        public int NoTarjeta { get; set; }
    }
}
