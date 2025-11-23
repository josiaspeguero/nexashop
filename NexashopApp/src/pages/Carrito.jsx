import "../styles/cart.styles.css";
import Navbar from "../components/Navbar";

function Carrito() {
  return (
    <div>
      <Navbar />
      <div className="carrito-compras-container">
        <div className="cart-items">
          <div className="product-item">
            <img
              src="https://cdn.pixabay.com/photo/2017/08/27/05/33/trousers-2685231_1280.jpg"
              alt=""
            />
            <div className="item-info">
              <div className="name-desc">
                <div className="item-name">Camisa Solar 3000</div>
                <div className="item-desc">
                  Camisa térmica que no abriga pero se ve bonita.
                </div>
              </div>

              <div className="item-price">RD$ 990</div>
            </div>
          </div>

          <div className="product-item">
            <img
              src="https://cdn.pixabay.com/photo/2015/01/07/18/11/shirts-591750_1280.jpg"
              alt=""
            />
            <div className="item-info">
              <div className="name-desc">
                <div className="item-name">Camisa Solar 3000</div>
                <div className="item-desc">
                  Camisa térmica que no abriga pero se ve bonita.
                </div>
              </div>

              <div className="item-price">RD$ 990</div>
            </div>
          </div>

          <div className="product-item">
            <img
              src="https://cdn.pixabay.com/photo/2016/03/27/19/31/fashion-1283863_1280.jpg"
              alt=""
            />
            <div className="item-info">
              <div className="name-desc">
                <div className="item-name">Camisa Solar 3000</div>
                <div className="item-desc">
                  Camisa térmica que no abriga pero se ve bonita.
                </div>
              </div>

              <div className="item-price">RD$ 990</div>
            </div>
          </div>
        </div>

        <div className="cart-order">
          <div className="btn-pay">
            <div className="logo-banco">
              <div className="circle white"></div>
              <div className="circle black"></div>
            </div>
            <button>Pagar Ahora</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carrito;
