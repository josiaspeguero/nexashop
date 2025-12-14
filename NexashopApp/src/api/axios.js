import axios from "axios";

const baseUrl = "http://localhost:5270";

export const listarProductos = async () => {
  const res = await axios.get(`${baseUrl}/api/productos`);
  return res;
};

export const listarProductosPorCategoria = async (categoria) => {
  const res = await axios.get(
    `${baseUrl}/api/productos/categoria/${categoria}`
  );
  return res;
};

export const listarProductosPorId = async (id) => {
  const res = await axios.get(`${baseUrl}/api/productos/id/${id}`);
  return res;
};

export const authUser = async (user) => {
  const res = await axios.post(`${baseUrl}/usuarios/iniciar-sesion`, user);
  return res;
};

export const createUser = async (user) => {
  const res = await axios.post(`${baseUrl}/usuarios/crear-cuenta`, user);
  return res;
};

export const getProductsFromCart = async (id) => {
  const res = await axios.get(`${baseUrl}/api/carrito/mis-productos/${id}`);
  return res;
};

export const agregarProductoAlCarrito = async (producto) => {
  const res = await axios.post(
    `${baseUrl}/api/ordenes/agregar-producto`,
    producto
  );
  return res;
};

export const eliminarProductoCarrito = async (id) => {
  const res = await axios.delete(`${baseUrl}/api/ordenes/${id}`);
  return res;
};

export const agregarDireccionEnvio = async (direccion) => {
  const res = await axios.post(
    `${baseUrl}/api/direcciones/agregar-direccion`,
    direccion
  );
  return res;
};

export const listarMisDirecciones = async (usuarioId) => {
  const res = await axios.get(
    `${baseUrl}/api/direcciones/mis-direcciones/${usuarioId}`
  );
  return res;
};
