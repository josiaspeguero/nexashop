import "../styles/products.style.css";
import Navbar from "../components/Navbar";
import CarAcces from "../components/CarAcces";
import Carousel from "../components/Carrousel";
import Productos from "../components/Productos";

function ListarProductos() {
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
