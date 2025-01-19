import React, { useEffect, useState } from 'react';
import './Login.css';
import { assets } from '../../assets/assets';
import axios from 'axios';

const Login = ({ setShowLogin, setIsAuthenticated }) => {
  const url = 'http://localhost:4000';
  const [token, setToken] = useState('');

  const [currState, setCurrState] = useState("Signup");
  const [data, setData] = useState({
    user_name: "",
    email: "",
    password: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({ ...data, [name]: value }));
  };

  const onLogin = async (event) => {
    event.preventDefault(); 
    let newUrl = `${url}`;

    if (currState === "Login") {
      newUrl += "/api/user/login"
    }
    else {
      newUrl += "/api/user/register"
    }

    try{
      const response = await axios.post(newUrl, data);

      if (response.data.success) {
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token);
        setIsAuthenticated(true);
        setShowLogin(false);
      }
      else {
        alert(response.data.message)
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  }

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className="login">
      <div className="login-overlay" onClick={() => setShowLogin(false)}></div>
      <form action="" className="login-container" onSubmit={onLogin}>
        <div className="login-title">
          <h2>{currState === "Signup" ? "Create Account" : "Welcome Back"}</h2>
          <img  onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="Close" />
        </div>
        <div className="login-input">
          {currState === "Signup" && (
            <input type="text" placeholder="Username" name='user_name' onChange={onChangeHandler} value={data.user_name} required />
          )}
          <input type="email" placeholder="Email" name='email' onChange={onChangeHandler} value={data.email} required />
          <input type="password" placeholder="Password" name='password' onChange={onChangeHandler} value={data.password} required />
        </div>
        <button className="login-button" type="submit">
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
