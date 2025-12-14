import "../styles/cart.styles.css";
import Navbar from "../components/Navbar";
import { FaTrash, FaTruck } from "react-icons/fa";
import { shortCutText } from "../utils/shortCutText";
import CambiarInfoEnvio from "../components/CambiarInfoEnvio";
import { useEffect, useState } from "react";
import { getProductsFromCart } from "../api/axios";

function Carrito() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const usuario = localStorage.getItem("usuario");
    if (!usuario) {
      return;
    }

    async function loadProductsCart() {
      const usuarioParse = JSON.parse(usuario);
      const myProducts = await getProductsFromCart(usuarioParse.id);
      setProducts(myProducts.data);
      const  carritoID = myProducts.data[0].carritoID;
      localStorage.setItem("carritoID", carritoID)
    }
    loadProductsCart();
  }, []);
  return (
    <div>
      <Navbar />
      <CambiarInfoEnvio />
      <div className="carrito-compras-container">
        <div className="cart-items">
          <h2>Cart Items</h2>
          {products.length > 0
            ? products.map((product) => (
                <div className="product-item">
                  <img src={product.photo} alt="" />
                  <div className="item-resume">
                    <div className="item-info">
                      <p className="item-name">{product.nombreProducto}</p>
                      <span className="item-desc">
                        {shortCutText(product.descripcion, 40)}
                      </span>
                      <p className="item-price">{product.precio}</p>
                    </div>
                    <div className="item-actions">
                      <div className="delete">
                        <FaTrash className="icon" />
                      </div>
                    </div>
                  </div>
                </div>
              ))
            : "No hay productos en el carrito"}
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
