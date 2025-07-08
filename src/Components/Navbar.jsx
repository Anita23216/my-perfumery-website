import { Link } from "react-router-dom";
import {ShoppingBag} from "phosphor-react";
import '../Styles/Navbar.css';
function Navbar(){
    return(
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
                <Link to="/shoppingbag"><ShoppingBag /></Link>
            </div>
            <div className="navbagcount">0</div>
        </div>
    )
}

export default Navbar