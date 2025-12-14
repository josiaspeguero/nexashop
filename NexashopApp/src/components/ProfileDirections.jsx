import "../styles/profile.styles.css";
import { FaEdit, FaSave, FaTruck, FaUser } from "react-icons/fa";
import CambiarInfoEnvio from "./CambiarInfoEnvio";
import BackHome from "./ui/BackHome";
import { useEffect, useState } from "react";
import { AgregarDireccionDeEnvio } from "./AgregarDireccionDeEnvio";
import { ToastContainer, toast } from "react-toastify";
import { actualizarDireccionEnvio, listarMisDirecciones } from "../api/axios";

function ProfileDirections() {
  const [direccion, setDireccion] = useState({
    usuarioId: "",
    direccionTexto: "",
    codigoPostal: "",
  });

  const [tieneDireccion, setTieneDireccion] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const usuario = localStorage.getItem("usuario");
    if (!usuario) {
      return;
    }
    const usuarioParse = JSON.parse(usuario);
    async function cargarDatos() {
      const misDirecciones = await listarMisDirecciones(usuarioParse.id);

      if (misDirecciones.data && misDirecciones.data.length > 0) {
        setDireccion(misDirecciones.data[0]);
        setTieneDireccion(true);
      } else {
        setDireccion({
          usuarioId: "",
          direccionTexto: "",
          codigoPostal: "",
        });
        setTieneDireccion(false);
      }
    }
    cargarDatos();
  }, []);

  const inputHandleChange = (e) => {
    const { name, value } = e.target;
    setDireccion({
      ...direccion,
      [name]: value,
    });
  };

  const actualizarDireccionSubmit = async () => {
    const res = await actualizarDireccionEnvio(direccion);
    try {
      setLoading(true);
      if (res.status === 201 || res.status === 200) {
        toast.success(res.data);
      }
      setLoading(false);
    } catch (error) {
      toast.error("No se pudo actualizar");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <CambiarInfoEnvio />
      <BackHome />
      <ToastContainer position="bottom-right" />
      <div className="profile-container">
        <div className="profile-title">
          <p>Account</p>
        </div>
        <div className="profile-content">
          <div className="profile-menu">
            <div
              className="menu-item"
              onClick={() => {
                window.location.href = "/perfil";
              }}
            >
              <div className="line-decoration"></div>
              <div className="icon-container">
                <FaUser className="icon" />
              </div>
              <div className="description">
                <p>Your Info</p>
                <span>Change or edit your personal info in some click</span>
              </div>
            </div>

            <div
              className="menu-item selected"
              onClick={() => {
                window.location.href = "/perfil/mis-direcciones";
              }}
            >
              <div className="line-decoration selected"></div>
              <div className="icon-container">
                <FaTruck className="icon" />
              </div>
              <div className="description">
                <p>Your Directions</p>
                <span>Check or edit your directions in some click</span>
              </div>
            </div>
          </div>

          <div className="profile-info profile-section">
            <div className="profile-header">
              <h2>Your Directions</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium esse Lorem, ipsum dolor.
              </p>
            </div>
            <hr />

            <div className="info-section">
              <div className="title-info">Direction & Postal Code</div>
              <div>
                <form
                  className=""
                  onSubmit={(e) => {
                    e.preventDefault();
                    actualizarDireccionSubmit();
                  }}
                >
                  <div className="input-group">
                    <input
                      type="text"
                      placeholder="Dirección de envio"
                      name="direccionTexto"
                      value={direccion?.direccionTexto || ""}
                      onChange={inputHandleChange}
                    />
                    <input
                      type="text"
                      placeholder="Codigo Postal"
                      name="codigoPostal"
                      value={direccion?.codigoPostal || ""}
                      onChange={inputHandleChange}
                    />
                  </div>
                  <button
                    type="submit"
                    className={
                      tieneDireccion ? "add-email" : "add-email-display"
                    }
                    style={{ marginTop: "30px" }}
                    disabled={loading}
                  >
                    <FaEdit className="icon" />
                    <p>{loading ? "Updating..." : "Change Information"}</p>
                  </button>

                  <button
                    className={
                      tieneDireccion ? "add-email-display" : "add-email"
                    }
                    style={
                      Object.values(direccion).some(
                        (v) => typeof v === "string" && v.trim() !== ""
                      )
                        ? { marginTop: "30px", cursor: "pointer" }
                        : {
                            marginTop: "30px",
                            opacity: "0.7",
                            background: "#f1f1f1",
                            cursor: "not-allowed",
                          }
                    }
                    disabled={loading}
                    onClick={async () => {
                      setLoading(true);
                      const res = await AgregarDireccionDeEnvio({
                        direccionLugar: direccion.direccionTexto,
                        codigoPostal: direccion.codigoPostal,
                      });
                      setLoading(false);
                      toast(res);
                    }}
                  >
                    <FaSave className="icon" />
                    <p>{loading ? "Saving..." : "Save Direction"}</p>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileDirections;
