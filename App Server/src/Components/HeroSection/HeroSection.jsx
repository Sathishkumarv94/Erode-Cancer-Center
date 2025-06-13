import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="heros-section">
        <div className="overlay" style={{ backgroundColor: 'red', opacity: 0.5 }}></div>
      <div className="hero-content">
        <h1>Welcome to Our Hospital</h1>
        <p>Providing Quality Healthcare with Compassion</p>
      </div>
    </section>
  );
};

export default HeroSection;
