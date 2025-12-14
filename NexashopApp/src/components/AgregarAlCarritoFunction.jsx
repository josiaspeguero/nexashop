// AgregarAlCarritoFunction.js
import { agregarProductoAlCarrito } from "../api/axios";

export async function agregarAlCarrito({
  productoID,
  nombreProducto,
  precio,
  descripcion,
  photo,
}) {
  const carritoID = localStorage.getItem("carritoID");

  if (!carritoID) {
    console.log("No hay carritoID");
    return null;
  }

  const producto = {
    carritoID,
    productoID,
    nombreProducto,
    precio,
    descripcion,
    photo,
    cantidad: 1,
  };

  try {
    const res = await agregarProductoAlCarrito(producto);

    if (res.status === 200 || res.status === 201) {
      return res.data;
    }
  } catch (error) {
    console.error("Error al agregar al carrito:", error);
    throw error;
  }
}
