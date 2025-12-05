import "../styles/components.css";
import { FaTimes } from "react-icons/fa";

function CambiarDireccionEnvio() {
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
          <button type="button">Actualizar</button>
        </div>
      </div>
    </div>
  );
}

export default CambiarDireccionEnvio;
