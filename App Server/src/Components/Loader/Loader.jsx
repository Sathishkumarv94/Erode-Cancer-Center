import React from 'react';
import './Loader.css';
import logo from '../Header/Assets/logo1.jpg';

const Loader = () => {
  return (
    <div className="loader-overlay">
      <img src={logo} alt="Loading Logo" className="loader-logo" />
     
    </div>
  );
};

export default Loader;
