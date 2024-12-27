import React from 'react';
import './home.css';
import { assets } from '../../assets/assets';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleExploreMenuClick = () => {
    navigate('/menu');
  };

  return (
    <div className="home-container">
      <img src={assets.background_home} alt="" className="background-home" />
      <header className="header">
        <h1 className="header-title">Welcome to Steamy Sips!</h1>
        <p className="header-subtitle">Discover our delicious coffee, brewed just for you.</p>
      </header>
      
      <section className="intro">
        <h2>Our Specialties</h2>
        <p>Whether you're craving a bold espresso or a perfectly brewed cappuccino, we have something for every coffee lover.</p>
        <button className="explore-button" onClick={handleExploreMenuClick}>Explore Our Menu</button>
      </section>
    </div>
  );
};

export default Home;
