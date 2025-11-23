import { FaShoppingCart } from "react-icons/fa";
import { shortCutText } from "../utils/shortCutText";
import { useEffect, useState } from "react";
import { listarProductos } from "../api/axios";

function Productos() {
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    async function loadData() {
      await listarProductos();
    }
    loadData();
  }, []);
  return (
    <div>
      <div className="products-section">
        {/* PRODUCTO 1 */}
        <div className="product-card">
          <div className="product-advice">
            <p>Nuevo</p>
          </div>
          <img
            src="https://cdn.pixabay.com/photo/2017/08/27/05/33/trousers-2685231_1280.jpg"
            alt="Pantalón Casual Slim Fit"
            className="product-img"
          />
          <div className="product-desc">
            <p className="product-title">Pantalón Casual Slim Fit</p>
            <span className="product-text">
              {shortCutText(
                "Pantalón moderno, cómodo y versátil para uso diario o casual elegante",
                60
              )}
            </span>
          </div>
          <div className="product-price">
            <p className="price">RD$ 1,290.00</p>
            <button className="add-cart-btn">Añadir a la cesta</button>
            <button className="icon-btn">
              <FaShoppingCart />
            </button>
            {/* <button className="add-cart-btn icon">
                <FaShoppingCart />
              </button> */}
          </div>
        </div>

        {/* PRODUCTO 2 */}
        <div className="product-card">
          <img
            src="https://cdn.pixabay.com/photo/2016/03/27/19/31/fashion-1283863_1280.jpg"
            alt="Vestido Elegante de Mujer"
            className="product-img"
          />
          <div className="product-desc">
            <p className="product-title">Vestido Elegante de Mujer</p>
            <span className="product-text">
              {shortCutText(
                "Vestido ligero, perfecto para salidas, eventos o días especiales",
                60
              )}
            </span>
          </div>
          <div className="product-price">
            <p className="price">RD$ 1,850.00</p>
            <button className="add-cart-btn">Añadir a la cesta</button>
            <button className="icon-btn">
              <FaShoppingCart />
            </button>
          </div>
        </div>

        <div className="product-card">
          <img
            src="https://cdn.pixabay.com/photo/2017/08/27/05/33/trousers-2685231_1280.jpg"
            alt="Pantalón Casual Slim Fit"
            className="product-img"
          />
          <div className="product-desc">
            <p className="product-title">Pantalón Casual Slim Fit</p>
            <span className="product-text">
              {shortCutText(
                "Pantalón moderno, cómodo y versátil para uso diario o casual elegante",
                60
              )}
            </span>
          </div>
          <div className="product-price">
            <p className="price">RD$ 1,290.00</p>
            <button className="add-cart-btn">Añadir a la cesta</button>
            <button className="icon-btn">
              <FaShoppingCart />
            </button>
            {/* <button className="add-cart-btn icon">
                <FaShoppingCart />
              </button> */}
          </div>
        </div>

        {/* PRODUCTO 3 */}
        <div className="product-card">
          <img
            src="https://cdn.pixabay.com/photo/2015/01/07/18/11/shirts-591750_1280.jpg"
            alt="Camisa Casual de Algodón"
            className="product-img"
          />
          <div className="product-desc">
            <p className="product-title">Camisa Casual de Algodón</p>
            <span className="product-text">
              {shortCutText(
                "Camisa fresca y transpirable, ideal para el día a día o para la oficina.",
                60
              )}
            </span>
          </div>
          <div className="product-price">
            <p className="price">RD$ 980.00</p>
            <button className="add-cart-btn">Añadir a la cesta</button>
            <button className="icon-btn">
              <FaShoppingCart />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Productos;
