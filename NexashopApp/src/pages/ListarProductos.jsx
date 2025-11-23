import { useEffect, useState } from "react";
import { listarProductos } from "../api/axios";
import { Link } from "react-router-dom";
import "../styles/products.style.css";
import Navbar from "../components/Navbar";
import CarAcces from "../components/CarAcces";
import Carousel from "../components/Carrousel";
import Productos from "../components/Productos";

function ListarProductos() {
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    async function traerProductos() {
      const data = await listarProductos();
      setProductos(data.data);
    }
    traerProductos();
  }, []);
  return (
    <div>
      <Navbar />
      <CarAcces />
      <div className="products-container">
        <div className="products-banner">
          <Carousel />
        </div>
        <Productos />
      </div>
    </div>
  );
}

export default ListarProductos;
