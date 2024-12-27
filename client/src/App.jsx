import React, {useState} from "react";
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Menu from './pages/Menu/Menu';
import Cart from './pages/Cart/Cart';
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Login from "./components/Login/Login";
import './App.css';
import Footer from "./components/Footer/Footer";

function App() {

  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
    {showLogin?<Login setShowLogin={setShowLogin}/>:<></>}
    <div className="App">
      <Navbar setShowLogin={setShowLogin} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/place-order" element={<PlaceOrder />} />
        <Route path="/login" element={<Login />} /> 
      </Routes>
    </div>
    <Footer/>
  </>
  );
}

export default App;
