import React from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className='navbar-logo'>
        <img className='logo' src={assets.logo} alt=""/>
        <div className="logo-text">Steamy Sips</div>
      </div>
      <div className="navbar-welcome">
        <span>Welcome to Steamy Sips Dashboard</span>
      </div>
      {/* To do : Settings, Logout, Notifications etc */}
    </nav>
  )
}

export default Navbar
