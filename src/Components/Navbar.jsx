import { Link } from "react-router-dom";
import { ShoppingBag } from "phosphor-react";
import { useContext, useState } from "react";
import { ShopContext } from "../context/shop-context";
import '../Styles/Navbar.css';

function Navbar() {
  const { shoppingBagItems } = useContext(ShopContext);
  const [menuOpen, setMenuOpen] = useState(false);

  // Calculate total quantity
  const totalItems = Object.values(shoppingBagItems).reduce((sum, item) => sum + item, 0);

  return (
    <div className="navbar">
      <div className="navbartitle">
        <h3>Jims Perfumery</h3>
      </div>

      {/* Hamburger menu for mobile */}
      <div className="hamburger" onClick={() => setMenuOpen((prev) => !prev)}>
        &#9776;
      </div>

      <div className={`navbarheading ${menuOpen ? "show" : ""}`}>
        <Link to="/home" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link>
        <Link to="/shop" onClick={() => setMenuOpen(false)}>Shop</Link>
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
