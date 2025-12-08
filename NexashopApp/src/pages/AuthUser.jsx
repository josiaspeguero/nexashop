import { FaLinkedin } from "react-icons/fa";
import ActionButton from "../components/ActionButton";
import "../styles/authuser.styles.css";
import { useState } from "react";
import { authUser } from "../api/axios";
import { ToastContainer, toast } from "react-toastify";
import { delayFunction } from "../utils/delayFunction";
import { useNavigate, Link } from "react-router-dom";

function AuthUser() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    correo: "",
    contrasena: "",
  });

  const [loading, setLoading] = useState(false);

  const authUserHandleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const authUserSubmit = async () => {
    setLoading(true);
    try {
      await delayFunction(2000);
      const res = await authUser(user);
      if (res.status === 200) {
        setLoading(false);
        toast.success("Bienvenido");
        const usuario = JSON.stringify(res.data);
        localStorage.setItem("usuario", usuario);
        navigate("/");
      } else {
        toast.error(res.data);
      }
    } catch (error) {
      setLoading(false);
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
            <h2>Acceder</h2>
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
            <Link
              to="https://www.linkedin.com/in/josias-peguero"
              className="navigate-linkedin"
            >
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
              authUserSubmit();
            }}
          >
            <label htmlFor="">Correo</label>
            <input
              type="text"
              placeholder="Usuario"
              name="correo"
              value={user.correo}
              onChange={authUserHandleChange}
              required
            />
            <label htmlFor="">Clave</label>
            <input
              type="text"
              placeholder="Contrasena"
              name="contrasena"
              value={user.contrasena}
              onChange={authUserHandleChange}
              required
            />{" "}
            {/* cambiar a email type */}
            <ActionButton
              text="Iniciar sesion"
              isActive={loading}
              type="submit"
            />
            <div className="change-form">
              <p>
                ¿No tienes una cuenta?{" "}
                <Link to="/crear-cuenta">Crea una ahora</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AuthUser;
