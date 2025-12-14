import "../styles/profile.styles.css";
import { FaEdit, FaSave, FaTruck, FaUser } from "react-icons/fa";
import CambiarInfoEnvio from "./CambiarInfoEnvio";
import BackHome from "./ui/BackHome";
import { useEffect, useState } from "react";
import { AgregarDireccionDeEnvio } from "./AgregarDireccionDeEnvio";
import { ToastContainer, toast } from "react-toastify";
import { listarMisDirecciones } from "../api/axios";

function ProfileDirections() {
  const [direccion, setDireccion] = useState({
    usuarioId: "",
    direccionTexto: "",
    codigoPostal: "",
  });

  const [tieneDireccion, setTieneDireccion] = useState(false);

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
  return (
    <div>
      <CambiarInfoEnvio />
      <BackHome />
      <ToastContainer position="bottom-right" />
      <div className="profile-container">
        <div className="profile-title">
          <p>Account</p>
          <button
            onClick={() => {
              console.log(direccion);
            }}
          >
            direeeee
          </button>
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
              <div className="input-group">
                <input
                  type="text"
                  placeholder="Dirección de envio"
                  name="direccionTexto"
                  value={direccion?.direccionTexto || ""}
                  onChange={inputHandleChange}
                />
                <input
                  type="number"
                  placeholder="Codigo Postal"
                  name="codigoPostal"
                  value={direccion?.codigoPostal || ""}
                  onChange={inputHandleChange}
                />
              </div>
            </div>
            <div className="info-section">
              <div
                className={tieneDireccion ? "add-email" : "add-email-display"}
                style={{ marginTop: "-30px" }}
                onClick={() => {
                  document
                    .getElementById("modal-container")
                    .classList.add("show");
                }}
              >
                <FaEdit className="icon" />
                <p>Change Information</p>
              </div>
              <div
                className={tieneDireccion ? "add-email-display" : "add-email"}
                id="save-direction"
                style={
                  Object.values(direccion).some(
                    (v) => typeof v === "string" && v.trim() !== ""
                  )
                    ? { marginTop: "-30px", cursor: "pointer" }
                    : {
                        marginTop: "-30px",
                        opacity: "0.7",
                        background: "#f1f1f1",
                        cursor: "not-allowed",
                      }
                }
                onClick={async () => {
                  const res = await AgregarDireccionDeEnvio({
                    direccionLugar: direccion.direccionTexto,
                    codigoPostal: direccion.codigoPostal,
                  });
                  toast(res);
                }}
              >
                <FaSave className="icon" />
                <p>Save Direction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileDirections;
