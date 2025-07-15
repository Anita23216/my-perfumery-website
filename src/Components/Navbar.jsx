import { Link } from "react-router-dom";
import { ShoppingBag } from "phosphor-react";
import { useContext } from "react";
import { ShopContext } from "../context/shop-context"; // Adjust path if needed
import '../Styles/Navbar.css';

function Navbar() {
  const { shoppingBagItems } = useContext(ShopContext);

  // Calculate total quantity
  const totalItems = Object.values(shoppingBagItems).reduce((sum, item) => sum + item, 0);

  return (
    <div className="navbar">
      <div className="navbartitle">
        <h3>Jims Perfumery</h3>
      </div>
      <div className="navbarheading">
        <Link to="/home">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/shop">Shop</Link>
      </div>
      <div className="navbarloginbag">
        <Link to="/login"><button>Login</button></Link>
        <Link to="/shoppingbag">
          <div style={{ position: 'relative' }}>
            <ShoppingBag size={24} />
            {totalItems > 0 && (
              <div className="navbagcount">{totalItems}</div>
            )}
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
