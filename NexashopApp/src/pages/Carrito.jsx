import "../styles/cart.styles.css";
import Navbar from "../components/Navbar";
import { FaTrash, FaTruck } from "react-icons/fa";
import { shortCutText } from "../utils/shortCutText";
import CambiarInfoEnvio from "../components/CambiarInfoEnvio";
import { useEffect, useState } from "react";
import { getProductsFromCart, listarMisDirecciones } from "../api/axios";
import { EliminarProductoFunction } from "../components/EliminarProductoFunction";
import { toast, ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";
import { formatMoney } from "../utils/formatMoney";

function Carrito() {
  const [products, setProducts] = useState([]);
  const [monto, setMonto] = useState(0);
  const [direccion, setDireccion] = useState({
    usuarioId: "",
    direccionTexto: "",
    codigoPostal: "",
  });
  useEffect(() => {
    const usuario = localStorage.getItem("usuario");
    if (!usuario) {
      return;
    }

    async function loadProductsCart() {
      const usuarioParse = JSON.parse(usuario);
      const myProducts = await getProductsFromCart(usuarioParse.id);
      setProducts(myProducts.data);
      console.log(myProducts.data);

      const carritoID = myProducts.data[0].carritoID;
      localStorage.setItem("carritoID", carritoID);

      //direccion de envio
      const direccionEnvio = await listarMisDirecciones(usuarioParse.id);
      if (direccionEnvio.data && direccionEnvio.data.length > 0) {
        setDireccion(direccionEnvio.data[0]);
      } else {
        setDireccion({
          usuarioId: "",
          direccionTexto: "",
          codigoPostal: "",
        });
      }

      if (myProducts.data.length > 0) {
        const total = myProducts.data.reduce((acc, item) => {
          return acc + Number(item.precio || 0);
        }, 0);
        setMonto(total);
      }
    }
    loadProductsCart();
  }, []);
  return (
    <div>
      <Navbar />
      <CambiarInfoEnvio />
      <ToastContainer
        position="bottom-right"
        style={{ textTransform: "capitalize" }}
      />
      <div className="carrito-compras-container">
        <div className="cart-items">
          <h2>Cart Items</h2>
          {products.length > 0
            ? products.map((product) => (
                <div className="product-item" key={product.id}>
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
                      <div
                        className="delete"
                        onClick={async () => {
                          const res = await EliminarProductoFunction(
                            product.id
                          );
                          toast(res);
                        }}
                      >
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
              <p>
                {direccion.direccionTexto.length > 0 ? (
                  direccion.direccionTexto
                ) : (
                  <div>
                    <Link to="/perfil/mis-direcciones">
                      Agrega Una Dirección
                    </Link>
                  </div>
                )}
              </p>
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
              <span>{formatMoney(monto)}</span>
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
          <div className="change-direction">
            <Link to="/perfil/mis-direcciones">Cambiar dirección de envío</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carrito;
