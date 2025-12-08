import { FaShoppingCart } from "react-icons/fa";
import { shortCutText } from "../utils/shortCutText";
import { formatMoney } from "../utils/formatMoney";
import { useEffect, useState } from "react";
import { listarProductos } from "../api/axios";
import { Link } from "react-router-dom";

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
      <div className="products-section">
        {productos.map((producto) => (
          <Link className="product-card" key={producto.id}>
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
              <button className="add-cart-btn">Añadir a la cesta</button>
              <button className="icon-btn">
                <FaShoppingCart />
              </button>
              {/* <button className="add-cart-btn icon">
                <FaShoppingCart />
              </button> */}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Productos;
