import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../../styles/components.css"

function BackHome() {
  return (
    <div>
      <Link to="/" className="backhome-container">
        <FaHome className="icon" />
      </Link>
    </div>
  );
}

export default BackHome;
