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
import { formatMoney } from "../utils/formatMoney";

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
        {detalleProducto ? (
          <div className="product">
            <div className="img-product">
              <img
                src={detalleProducto.photoUrl}
                alt={detalleProducto.nombre}
              />
            </div>
            <div className="info-product">
              <h2>{detalleProducto.nombre}</h2>
              <p>{detalleProducto.descripcion}</p>
              <div className="price">
                <span>{formatMoney(detalleProducto.precio)}</span>
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
        ) : (
          <div className="not-found-product">
            No pudimos encontrar este producto. Puede que ya no esté en
            inventario.
          </div>
        )}

        <Productos />
      </div>
    </div>
  );
}

export default ProductDetail;
