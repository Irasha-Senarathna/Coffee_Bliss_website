import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate, useLocation, Link } from 'react-router-dom';
import './Navbar.css';
import { assets } from '../../assets/assets';
// import useCart from '../../hooks/useCart';

const Navbar = ({setShowLogin, isAuthenticated, handleLogout}) => {
  const [menu, setMenu] = useState("home");
  const navigate = useNavigate();
  const location = useLocation();
  // const { cartItems } = useCart();

  useEffect(() => {
    const path = location.pathname;
    if (path === "/") {
      setMenu("home");
    } else if (path === "/menu") {
      setMenu("menu");
    } else if (path === "/about") {
      setMenu("about");
    } else if (path === "/contact") {
      setMenu("contact-us");
    } else if (path === "/cart") {
      setMenu("cart");
    }
  }, [location]);

  const handleBasketClick = () => {
    navigate('/cart');
  };

  return (
    <div className='navbar'>
      <div className="navbar-left">
        <Link to='/'><img src={assets.logo} className='logo' alt="Logo" /></Link>
        <div className="logo-text">Steamy Sips</div>
      </div>
      <ul className="navbar-menu">
        <li className={menu === "home" ? "active" : ""}>
          <NavLink to="/">Home</NavLink>
        </li>
        <li className={menu === "menu" ? "active" : ""}>
          <NavLink to="/menu">Menu</NavLink>
        </li>
        <li className={menu === "about" ? "active" : ""}>
          <NavLink to="/about">About</NavLink>
        </li>
        <li className={menu === "contact-us" ? "active" : ""}>
          <NavLink to="/contact">Contact Us</NavLink>
        </li>      
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} className="navbar-icon search-icon" alt="Search" />
        <div className="navbar-search-icon">
          <img src={assets.basket_icon} className={`navbar-icon basket-icon ${menu === "cart" ? "active" : ""}`} alt="Basket" onClick={handleBasketClick} />
        </div>
        {/* <button onClick={()=>setShowLogin(true)}>Sign In</button> */}
        {isAuthenticated ? (
          <button onClick={handleLogout}>Log Out</button>
        ) : (
          <button onClick={() => setShowLogin(true)}>Sign In</button>
        )}
      </div>
    </div>
  );
};

export default Navbar;