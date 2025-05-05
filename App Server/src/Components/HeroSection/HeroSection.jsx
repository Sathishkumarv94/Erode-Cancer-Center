import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
        <div className="overlay"></div>
      <div className="hero-content">
        <h1>Welcome to Our Hospital</h1>
        <p>Providing Quality Healthcare with Compassion</p>
      </div>
    </section>
  );
};

export default HeroSection;
