namespace TiendaBackend.Domain.Models
{
    public class OrdenProducto
    {
        public int Id { get; set; }
        public int CarritoID { get; set; }
        public int ProductoID { get; set; }
        public string NombreProducto { get; set; }= string.Empty;
        public decimal Precio { get; set; }
        public string Descripcion {  get; set; } = string.Empty; 
        public string Photo { get; set; } = string.Empty;
        public int Cantidad {  get; set; }
        public DateTime FechaAgregado {  get; set; }
        public bool IsComprado { get; set; } = false;
    }
}
