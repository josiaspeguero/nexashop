import "../styles/product.detail.style.css";
import Navbar from "../components/Navbar";
import CarAccess from "../components/CarAcces";
import { Link } from "react-router-dom";
import Productos from "../components/Productos";
import { useParams } from "react-router-dom";
import {
  listarProductosPorCategoria,
  listarProductosPorId,
} from "../api/axios";
import { useEffect, useState } from "react";

function ProductDetail() {
  const { id } = useParams();
  const [detalleProducto, setProducto] = useState({});
  useEffect(() => {
    async function loadData() {
      if (!id) {
        return;
      } else {
        const producto = await listarProductosPorId(id);
        setProducto(producto.data);
      }
    }
    loadData();
  }, [id]);

  useEffect(() => {
    if (!detalleProducto || Object.keys(detalleProducto).length === 0) return;
    async function loadData() {
      const res = await listarProductosPorCategoria(detalleProducto.categoria);
      console.log(res.data);
    }
    loadData();
  }, [detalleProducto]);

  return (
    <div>
      <Navbar />
      <CarAccess />
      <div className="detail-product-container">
        <div className="product">
          <div className="img-product">
            <img
              src="https://cdn.pixabay.com/photo/2017/08/27/05/33/trousers-2685231_1280.jpg"
              alt=""
            />
          </div>
          <div className="info-product">
            <h2>Pantalón Casual Slim Fit</h2>
            <p>
              Pantalón moderno, cómodo y versátil, diseñado para acompañarte en
              cualquier ocasión.
            </p>
            <div className="price">
              <span>RD 1,240</span>
            </div>
            <div className="select-size">
              <div className="title">
                <p>Select a size</p>
                <Link to="/">Guide Size</Link>
              </div>
              <div className="sizes">
                <div className="box-size">S</div>
                <div className="box-size selected">M</div>
                <div className="box-size">L</div>
              </div>
            </div>
            <button className="buy-now">Comprar Ahora</button>
            <button>Agregar al carrito</button>
          </div>
        </div>
        <Productos />
      </div>
    </div>
  );
}

export default ProductDetail;
