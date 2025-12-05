import "../styles/cart.styles.css";
import Navbar from "../components/Navbar";
import { FaTrash, FaTruck } from "react-icons/fa";
import { shortCutText } from "../utils/shortCutText";
import CambiarDireccionEnvio from "../components/CambiarDireccionEnvio";

function Carrito() {
  return (
    <div>
      <Navbar />
      <CambiarDireccionEnvio />
      <div className="carrito-compras-container">
        <div className="cart-items">
          <h2>Cart Items</h2>
          <div className="product-item">
            <img
              src="https://cdn.pixabay.com/photo/2017/08/27/05/33/trousers-2685231_1280.jpg"
              alt=""
            />
            <div className="item-resume">
              <div className="item-info">
                <p className="item-name">Pantalón Slim Fit</p>
                <span className="item-desc">
                  {shortCutText(
                    "Pantalón elástico, cómodo para uso diario o casual",
                    40
                  )}
                </span>
                <p className="item-price">RD$ 2,450</p>
              </div>
              <div className="item-actions">
                <div className="delete">
                  <FaTrash className="icon" />
                </div>
              </div>
            </div>
          </div>

          {/*  */}
          <div className="product-item">
            <img
              src="https://img.kwcdn.com/product/fancy/a47f4bfa-2ff9-4888-be1f-2af13e1d37a8.jpg?imageMogr2/auto-orient%7CimageView2/2/w/800/q/70/format/webp"
              alt=""
            />
            <div className="item-resume">
              <div className="item-info">
                <p className="item-name">Clásico Floral</p>
                <span className="item-desc">
                  {shortCutText(
                    "  Clasico floral con corte recto, ideal para cualquier ocasión",
                    50
                  )}
                </span>
                <p className="item-price">RD$ 1,850</p>
              </div>
              <div className="item-actions">
                <div className="delete">
                  <FaTrash className="icon" />
                </div>
              </div>
            </div>
          </div>

          {/*  */}
          <div className="product-item">
            <img
              src="https://cdn.pixabay.com/photo/2016/03/27/19/31/fashion-1283863_1280.jpg"
              alt=""
            />
            <div className="item-resume">
              <div className="item-info">
                <p className="item-name">Pantalón Chino Beige</p>
                <span className="item-desc">
                  {shortCutText(
                    "  Ligero, fresco y perfecto para climas cálidos y eventos casuales",
                    50
                  )}
                </span>
                <p className="item-price">RD$ 2,150</p>
              </div>
              <div className="item-actions">
                <div className="delete">
                  <FaTrash className="icon" />
                </div>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="product-item">
            <img
              src="https://i.pinimg.com/236x/2b/d8/5f/2bd85f5d60ddc308076d0f25e1510af0.jpg"
              alt=""
            />
            <div className="item-resume">
              <div className="item-info">
                <p className="item-name">Traje Hombre | Formal</p>
                <span className="item-desc">
                  {shortCutText(
                    " Traje resistente con corte recto, ideal para eventos formales",
                    50
                  )}
                </span>
                <p className="item-price">RD$ 2,850</p>
              </div>
              <div className="item-actions">
                <div className="delete">
                  <FaTrash className="icon" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="cart-order">
          <div className="order-title">
            <h2>Resumen del pedido</h2>
          </div>
          <div className="direction">
            <FaTruck className="icon" />
            <div className="info">
              <span>Direccion de envio</span>
              <p>Calle #04, San Jose de Ocoa</p>
            </div>
          </div>
          <div className="amount-resume">
            <div className="order-item">
              <p>Subtotal</p>
              <span>RD$ 14,000</span>
            </div>
            <div className="order-item">
              <p>Envio</p>
              <span>RD$ 1,210</span>
            </div>
            <div className="order-item">
              <p>Impuesto</p>
              <span>0%</span>
            </div>
            <hr />
            <div className="order-item total">
              <p>Total</p>
              <span>RD$ 15,210</span>
            </div>
            <hr />
          </div>
          <div className="btn-pay">
            <div className="logo-banco">
              <div className="circle white"></div>
              <div className="circle black"></div>
            </div>
            <button>Pagar Ahora</button>
          </div>
          <p
            className="change-direction"
            onClick={() => {
              document.getElementById("modal-container").classList.add("show");
            }}
          >
            Cambiar dirección de envío
          </p>
        </div>
      </div>
    </div>
  );
}

export default Carrito;
