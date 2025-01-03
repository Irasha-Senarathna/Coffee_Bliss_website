import React from 'react';
import './Footer.css'; 
import { assets } from '../../assets/assets';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2>About Steamy Sips</h2>
          <p>At Steamy Sips, every cup tells a story. A story brewed with passion, warmth, and dedication. Join us on a journey where each sip brings you closer to the heart of the coffee world.</p>
        </div>
        <div className="footer-section links">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
          </ul>
        </div>
        <div className="footer-section contact">
          <h2>Contact Us</h2>
          <p><img className="contact-icon" src={assets.location_icon} alt=""/>42 Brew Boulevard, Cappuccino District, Espresso City </p>
          <p><img className="contact-icon" src={assets.phone_icon} alt=""/>+1 234 567 890</p>
          <p><img className="contact-icon" src={assets.email_icon} alt=""/><a href="mailto:support@steamysipps.com">support@steamysipps.com</a></p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 Steamy Sips. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
