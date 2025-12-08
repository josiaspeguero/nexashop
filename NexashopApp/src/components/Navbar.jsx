import { FaSearch } from "react-icons/fa";
import "../styles/components.css";
import { useEffect, useState } from "react";

function Navbar() {
  const [user, setUser] = useState({
    nombreCompleto: "",
    correo: "",
  });
  useEffect(() => {
    const usuario = localStorage.getItem("usuario");

    if (usuario) {
      const userParseado = JSON.parse(usuario);

      setUser({
        nombreCompleto: userParseado.nombreCompleto,
        correo: userParseado.correo,
      });
    }
  }, []);
  return (
    <div>
      <div className="navbar-container">
        <div className="logo">
          <div className="circle one">
            <div className="circle two">
              <div className="circle three"></div>
            </div>
          </div>
          <div className="logo-text">
            <p>NexaShop</p>
          </div>
        </div>
        <div className="navbar-search">
          <FaSearch className="icon" />
          <input type="text" placeholder="Escribe aquí para buscar" />
        </div>
        <div
          className="navbar-actions"
          onClick={() => {
            window.location.href = "/perfil";
          }}
        >
          <div className="avatar">
            <div className="profile">
              <span style={{ textTransform: "uppercase" }}>
                {user.nombreCompleto.slice(0, 2)}
              </span>
            </div>
            <div className="user-info">
              <p>{user.nombreCompleto}</p>
              <span>{user.correo}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
