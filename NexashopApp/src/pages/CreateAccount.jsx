import { FaLinkedin } from "react-icons/fa";
import ActionButton from "../components/ActionButton";
import "../styles/authuser.styles.css";
import { useState } from "react";
import { createUser } from "../api/axios";
import { ToastContainer, toast } from "react-toastify";
import { delayFunction } from "../utils/delayFunction";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function CreateAccount() {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    nombreCompleto: "",
    fechaNacimiento: "",
    correo: "",
    contrasena: "",
    correoSecundario: "",
  });
  //navegacion a iniciar sesion
  const navigate = useNavigate();

  const createUserHandleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const createUserSubmit = async () => {
    setLoading(true);
    try {
      await delayFunction(1000);
      const res = await createUser(user);
      if (res.status === 200) {
        setLoading(false);
        toast.success(res.data.mensaje);
        console.log(res);
        await delayFunction(20000);
        navigate("/iniciar-sesion");
      } else {
        setLoading(false);
        toast.error(res.data);
      }
    } catch (error) {
      const status = error?.response?.status;
      const message = error?.response?.data;

      if (status === 400) {
        toast.error(message || "Datos inválidos.");
      } else if (status === 401) {
        toast.error(message || "No autorizado.");
      } else if (status === 409) {
        toast.error(message || "Usuario ya existe.");
      } else if (status === 500) {
        toast.error(message || "Error interno del servidor.");
      } else {
        toast.error(message || "Error inesperado.");
      }
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <ToastContainer />
      <div className="auth-user-container">
        <div className="line"></div>
        <div className="auth-header">
          <div className="title">
            <hr />
            <h2>Registar</h2>
            <hr />
          </div>
          <div className="info">
            <p>Accede a tu cuenta para descubrir tu estilo</p>
          </div>
        </div>
        <div className="line"></div>
        <div className="auth-form">
          <div className="contact-form">
            <p className="title">Connect</p>
            <Link to="https://www.linkedin.com/in/josias-peguero" className="navigate-linkedin">
              {" "}
              <div className="linkedin">
                <FaLinkedin className="icon" />
                <div className="linkedin-info">
                  <span>Linkedin</span>
                  <p>Josias M. Peguro Santana</p>
                </div>
              </div>
            </Link>
            <hr />
            <div className="contact-info" style={{ marginTop: "30px" }}>
              <p>Response Time</p>
              <span> &lt; 24h</span>
            </div>
            <div className="contact-info">
              <p>Location</p>
              <span>Remote</span>
            </div>
          </div>
          <form
            className="form"
            onSubmit={(e) => {
              e.preventDefault();
              createUserSubmit();
            }}
          >
            <label htmlFor="">Nombre Completo</label>
            <input
              type="text"
              placeholder="Nombre Completo"
              name="nombreCompleto"
              value={user.nombreCompleto}
              onChange={createUserHandleChange}
              required
            />
            <label htmlFor="">Fecha de nacimiento</label>
            <input
              type="date"
              placeholder="Contrasena"
              name="fechaNacimiento"
              value={user.fechaNacimiento}
              onChange={createUserHandleChange}
              required
            />{" "}
            <label htmlFor="">Correo</label>
            <input
              type="text"
              placeholder="Usuario"
              name="correo"
              value={user.correo}
              onChange={createUserHandleChange}
              required
            />
            <label htmlFor="">Correo Secundario</label>
            <input
              type="text"
              placeholder="Usuario"
              name="correoSecundario"
              value={user.correoSecundario}
              onChange={createUserHandleChange}
              required
            />
            <label htmlFor="">Clave</label>
            <input
              type="text"
              placeholder="Contrasena"
              name="contrasena"
              value={user.contrasena}
              onChange={createUserHandleChange}
              required
            />{" "}
            <label htmlFor="">Confirme la clave</label>
            <input type="text" placeholder="confirmar clave" name="" />{" "}
            {/* cambiar a email type */}
            <ActionButton
              text={"Crear cuenta"}
              isActive={loading}
              type={"submit"}
            />
            <div className="change-form">
              <p>
                ¿Tienes una cuenta?{" "}
                <Link to="/iniciar-sesion">Inicia Sesion</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateAccount;
