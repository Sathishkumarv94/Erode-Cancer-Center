import React from "react";
import { Link } from "react-router-dom";
import logo from '../Header/Assets/Logo1.jpg'
import '../Header/Header.css'
import { useState } from "react";
import { FaBars, FaTimes } from 'react-icons/fa';
import './Assets/Serif.ttf'
import {FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';


function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

    return(
      
        <div className="nav-sec">
          {/* Contact Info Section Above Nav */}
      <div className="top-contact-bar">
        <div className="contact-left">
        <p><FaPhone className="contact-icon" /><strong> +919842922443</strong></p>
        <p><FaEnvelope className="contact-icon" /><strong> info@erodecancercentre.com</strong></p>
        </div>
        <div className="contact-right">
        <a href="https://www.facebook.com/erodecancercentrehospital" target="_blank" rel="noopener noreferrer">
    <FaFacebook className="social-icon" />
  </a>
  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
    <FaTwitter className="social-icon" />
  </a>
  <a href="https://www.instagram.com/erodecancercentrehospital/" target="_blank" rel="noopener noreferrer">
    <FaInstagram className="social-icon" />
  </a>
  
        </div>
      </div>
            <div className="nav-head">
            <div className="nav-logo" ><img src={logo}></img>
            <div className="logo-text">
    <h3><span style={{ color: '#f07d43' }}>S</span>alem</h3>
    <br />
    <h3><span style={{ color: '#e62780' }}>U</span>nit</h3>
  </div></div>
            <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
            <nav className={`nav-menu ${isOpen ? 'active' : ''}`}>
                <Link to='/' className="nav-text" onClick={toggleMenu}><h4>Home</h4></Link>
                <div className="nav-text dropdown facility-dropdown">
  <h4>Facility</h4>
  <div className="dropdown-content">
    <Link to="/Cancer Screening" onClick={toggleMenu}><h5>Cancer Screening</h5></Link>
    <Link to="/Early Cancer Detection" onClick={toggleMenu}><h5>Early Cancer Detection</h5> </Link>
    <Link to="/Surgical Oncology" onClick={toggleMenu}><h5>Surgical Oncology</h5></Link>
    <Link to="/Medical Oncology" onClick={toggleMenu}><h5>Medical Oncology</h5></Link>
    <Link to="/Radiation Oncology" onClick={toggleMenu}><h5>Radiation Oncology-IMRT</h5></Link>
    <Link to="/H D R Brachytherapy" onClick={toggleMenu}><h5>H D R Brachytherapy</h5></Link>
    <Link to="/Pain & Palliative Care" onClick={toggleMenu}><h5>Pain & Palliative Care</h5></Link>
  </div>
</div>
<div className="nav-text dropdown about-dropdown">
            <h4>About</h4>
            <div className="dropdown-content">
              <Link to="/about-us" onClick={toggleMenu}><h5>About Us</h5></Link>
              <Link to="/our-experts" onClick={toggleMenu}><h5>Our Experts</h5></Link>
              <Link to="/md-chairman"><h5>MD & Chairman</h5></Link>
            </div>
          </div>
                <Link to='/news' className="nav-text" onClick={toggleMenu}><h4>News&Events</h4></Link>
                <Link to='/Clinics' className="nav-text" onClick={toggleMenu}><h4>Peripheral Clinics</h4></Link>
                <Link to='/Contact' className="nav-text" onClick={toggleMenu}><h4>Contact</h4></Link>
                </nav>
            </div>

        </div>
    )
}
export default Header;