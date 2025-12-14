import { FaUser, FaUpload, FaPlus, FaTruck } from "react-icons/fa";
import "../styles/profile.styles.css";
import BackHome from "../components/ui/BackHome";
import { ToastContainer, toast } from "react-toastify";
import { useEffect, useState } from "react";

function Profile() {
  const [info, setInfo] = useState({
    nombreCompleto: "",
    correo: "",
    numero: "8093456789",
  });
  useEffect(() => {
    const usuario = localStorage.getItem("usuario");
    if (!usuario) {
      return;
    }
    const usuarioParse = JSON.parse(usuario);
    setInfo({
      nombreCompleto: usuarioParse.nombreCompleto,
      correo: usuarioParse.correo,
    });
  }, []);
  return (
    <div>
      <BackHome />
      <ToastContainer position="bottom-right" />
      <div className="profile-container">
        <div className="profile-title">
          <p>Account</p>
        </div>
        <div className="profile-content">
          <div className="profile-menu">
            <div
              className="menu-item selected"
              onClick={() => {
                window.location.href = "/perfil";
              }}
            >
              <div className="line-decoration selected"></div>
              <div className="icon-container">
                <FaUser className="icon" />
              </div>
              <div className="description">
                <p>Your Info</p>
                <span>Change or edit your personal info in some click</span>
              </div>
            </div>

            <div
              className="menu-item"
              onClick={() => {
                window.location.href = "/perfil/mis-direcciones";
              }}
            >
              <div className="line-decoration"></div>
              <div className="icon-container">
                <FaTruck className="icon" />
              </div>
              <div className="description">
                <p>Your Directions</p>
                <span>Change or edit your personal info in some click</span>
              </div>
            </div>
          </div>

          <div className="profile-info profile-section">
            <div className="profile-header">
              <h2>Personal Information</h2>
              <p>
                Manage your personal details, including your full name, contact
                number, and email.
              </p>
            </div>
            <hr />
            <div className="profile-personal-info">
              <div className="profile-picture">
                <div className="picture">JM</div>
                <div className="profile-desciption">
                  <div>
                    {" "}
                    <p>Your Avatar</p>
                    <span>PNG, JPG, WEBP</span>
                  </div>

                  <button
                    className="upload-profile"
                    onClick={() => {
                      toast.warning("Funcion No Disponible Actualmente");
                    }}
                  >
                    <FaUpload className="icon" />
                    Upload Image
                  </button>
                </div>
              </div>
            </div>
            <hr />
            <div className="info-section">
              <div className="title-info">Basic Info</div>
              <div className="input-group">
                <input
                  type="text"
                  placeholder={info.nombreCompleto}
                  value={info.nombreCompleto}
                />
                <input
                  type="text"
                  placeholder="+1 (809) 391 4895"
                  value={info.numero}
                />
              </div>
            </div>
            <hr />
            <div className="info-section">
              <div className="title-info">Your Emails</div>
              <input type="text" value={info.correo} />
              <div
                className="add-email"
                onClick={() => {
                  toast.warning("Función No Disponible Actualmente");
                }}
              >
                <FaPlus className="icon" />
                <p>Update Information</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
