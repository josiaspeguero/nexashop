import { eliminarProductoCarrito } from "../api/axios";
export const EliminarProductoFunction = async (id) => {
  try {
    const res = await eliminarProductoCarrito(id);
    if (res.status === 200 || res.status === 201) {
      return res.data ?? "Producto eliminado correctamente";
    }
    return "No se pudo eliminar el producto"
  } catch (error) {
    return "Ha ocurrido un error";
  }
};
