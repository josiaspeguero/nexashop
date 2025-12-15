import { FaShoppingCart } from "react-icons/fa";
import { shortCutText } from "../utils/shortCutText";
import { formatMoney } from "../utils/formatMoney";
import { useEffect, useState } from "react";
import { listarProductos } from "../api/axios";
import { Link } from "react-router-dom";
import { agregarAlCarrito } from "./AgregarAlCarritoFunction";
import { toast, ToastContainer } from "react-toastify";

function Productos() {
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    async function loadData() {
      const productos = await listarProductos();
      setProductos(productos.data);
    }
    loadData();
  }, []);

  return (
    <div>
      <ToastContainer
        position="bottom-right"
        style={{ zIndex: "10000", textTransform: "capitalize" }}
      />
      <div className="products-section">
        {productos.map((producto) => (
          <Link
            to={`/detail/${producto.id}`}
            className="product-card"
            key={producto.id}
          >
            <div className="product-advice">
              <p>Nuevo</p>
            </div>
            <img
              src={producto.photoUrl}
              alt={producto.nombre}
              className="product-img"
            />
            <div className="product-desc">
              <p className="product-title">{producto.nombre}</p>
              <span className="product-text">
                {shortCutText(producto.descripcion, 60)}
              </span>
            </div>
            <div className="product-price">
              <p className="price">{formatMoney(producto.precio)}</p>
              <button
                className="add-cart-btn"
                onClick={async () => {
                  const res = await agregarAlCarrito({
                    productoID: producto.id,
                    nombreProducto: producto.nombre,
                    descripcion: producto.descripcion,
                    precio: producto.precio,
                    photo: producto.photoUrl,
                  });

                  toast(res);
                }}
              >
                Añadir a la cesta
              </button>
              <button className="icon-btn">
                <FaShoppingCart />
              </button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Productos;
