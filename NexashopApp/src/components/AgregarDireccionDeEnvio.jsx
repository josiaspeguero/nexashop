import { agregarDireccionEnvio } from "../api/axios";

export async function AgregarDireccionDeEnvio({
  direccionLugar,
  codigoPostal,
}) {
  const usuario = localStorage.getItem("usuario");
  if (!usuario) {
    return "No hay user";
  }
  const usuarioParse = JSON.parse(usuario);

  const direccion = {
    usuarioId: usuarioParse.id,
    direccionTexto: direccionLugar,
    codigoPostal,
  };

  try {
    const res = await agregarDireccionEnvio(direccion);
    return res.data;
  } catch (error) {
    return error;
  }
}
