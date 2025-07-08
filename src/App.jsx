import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Shop from "./Pages/Shop";
import Login from "./Pages/Login";
import Shoppingbag from "./Pages/Shoppingbag";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ShopContextProvider } from "./context/shop-context";
function App() {
  
  return (
    <div>
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/home" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/shop" element={<Shop/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/shoppingbag" element={<Shoppingbag/>}/>
          </Routes>
          <Footer/>
        </Router>
      </ShopContextProvider>
    </div>
  )
}

export default App
