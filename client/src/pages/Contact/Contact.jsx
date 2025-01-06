import React from "react";
import "./Contact.css";
import { assets } from "../../assets/assets";

const ContactUs = () => {
  return (
    <div className="contact-us">
      <img className="background-contact" src={assets.background_contact} alt=""/>
      <div className="contact-header">
        <h1>Let's Brew Up a Conversation</h1>
        <p>
          Whether it's a steaming cup or a steaming query, we're always here to sip and chat. Connect with us below!
        </p>
      </div>

      <div className="contact-container">
        <div className="contact-details">
          <h2>Our Coffee Shop</h2>
          <p>
            <img className="contact-icon" src={assets.location_icon} alt=""/>
            42 Brew Boulevard, Cappuccino District, Espresso City 
          </p>
          <p>
            <img className="contact-icon" src={assets.phone_icon} alt=""/>
            +1 234 567 890
          </p>
          <p>
            <img className="contact-icon" src={assets.email_icon} alt=""/>
            <a href="mailto:support@steamysipps.com">support@steamysipps.com</a>
          </p>
        </div>

        <div className="social-media">
        <h2>Join Our Coffee Community</h2>
        <p>Follow us on your favorite platforms for the latest brews and news!</p>
          <div className="social-icons">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <img className="social-icons" src={assets.facebook_icon} alt=""/>
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <img className="social-icons" src={assets.instagram_icon} alt=""/>
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <img className="social-icons" src={assets.linkedin_icon} alt=""/>
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <img className="social-icons" src={assets.twitter_icon} alt=""/>
            </a>
          </div>
        </div>

        <div className="operating-hours">
          <h2>Our Brewing Hours</h2>
          <p><strong>Monday - Friday:</strong> 7:00 AM - 7:00 PM</p>
          <p><strong>Saturday - Sunday:</strong> 8:00 AM - 8:00 PM</p>
          <p>
            <em>"Because a good day always starts with a great cup of coffee!"</em>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
