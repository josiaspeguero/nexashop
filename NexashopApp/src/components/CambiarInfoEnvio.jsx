import "../styles/components.css";
import { FaTimes } from "react-icons/fa";
import { useState } from "react";

function CambiarInfoEnvio() {
  const [direccion, setDireccion] = useState({
    usuarioId: "",
    direccionTexto: "",
    codigoPostal: "",
  });
  return (
    <div>
      <div className="modal-container " id="modal-container">
        <div className="modal">
          <FaTimes
            className="icon"
            onClick={() =>
              document
                .getElementById("modal-container")
                .classList.remove("show")
            }
          />
          <h2>Cambia tu direccion de envio</h2>
          <label htmlFor="">Direccion Actual</label>
          <input
            type="text"
            placeholder="Calle #04, esq. Sabala, San Jose de Ocoa"
          />
          <label htmlFor="">Codigo Postal</label>
          <input type="text" placeholder="98000" />
          <button type="button">Actualizar</button>
        </div>
      </div>
    </div>
  );
}

export default CambiarInfoEnvio;
