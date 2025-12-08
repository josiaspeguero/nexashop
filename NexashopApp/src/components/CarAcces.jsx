import { FaShoppingCart } from "react-icons/fa";
import {Link} from 'react-router-dom'

function CarAcces() {
  return (
    <div>
      <Link to="/cart" className="car-access">
        <div className="car-elements">
          <FaShoppingCart className="icon" />
          <p className="car-items">10</p>
        </div>
      </Link>
    </div>
  );
}

export default CarAcces;
