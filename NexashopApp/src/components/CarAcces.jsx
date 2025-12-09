import { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { getProductsFromCart } from "../api/axios";

function CarAcces() {
  const [totalProductos, setProducts] = useState(null);
  useEffect(() => {
    const usuario = localStorage.getItem("usuario");
    if (!usuario) {
      return;
    }

    async function loadProductsCart() {
      const usuarioParse = JSON.parse(usuario);
      const myProducts = await getProductsFromCart(usuarioParse.id);
      console.log(myProducts.data);

      setProducts(myProducts.data.length);
    }
    loadProductsCart();
  }, []);
  return (
    <div>
      <Link to="/cart" className="car-access">
        <div className="car-elements">
          <FaShoppingCart className="icon" />
          <p className="car-items">{totalProductos}</p>
        </div>
      </Link>
    </div>
  );
}

export default CarAcces;
