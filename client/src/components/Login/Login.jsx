import React, { useState } from 'react';
import './Login.css';
import { assets } from '../../assets/assets';

const Login = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Signup");

  return (
    <div className="login">
      <div className="login-overlay" onClick={() => setShowLogin(false)}></div>
      <form action="" className="login-container">
        <div className="login-title">
          <h2>{currState === "Signup" ? "Create Account" : "Welcome Back"}</h2>
          <img 
            onClick={() => setShowLogin(false)} 
            src={assets.cross_icon} 
            alt="Close" 
          />
        </div>
        <div className="login-input">
          {currState === "Signup" && (
            <input type="text" placeholder="Username" required />
          )}
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
        </div>
        <button className="login-button">
          {currState === "Signup" ? "Sign Up" : "Log In"}
        </button>
        <div className="login-condition">
          <input type="checkbox" required />
          <p>I agree to the terms and conditions</p>
        </div>
        {currState === "Login" ? (
          <p>
            Don't have an account?{" "}
            <span onClick={() => setCurrState("Signup")}>Sign Up</span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span onClick={() => setCurrState("Login")}>Log In</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
