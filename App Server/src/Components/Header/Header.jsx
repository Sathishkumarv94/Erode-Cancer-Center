import React, { useState, useRef, useEffect } from "react";
import { NavLink,useLocation } from "react-router-dom";
import logo from '../Header/Assets/Logo1.jpg';
import twitterX from './Assets/twitter.png';  
import '../Header/Header.css';
import { FaBars, FaTimes, FaPhone, FaEnvelope, FaFacebook, FaInstagram } from 'react-icons/fa';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const facilityRoutes = [
   
  "/cancer-screening", 
  "/early-cancer-detection", 
  "/surgical-oncology", 
  "/medical-oncology", 
 "/radiation-oncology", 
  "/hdr-brachytherapy", 
 "/pain-palliative-care", 
  ];

  const aboutRoutes = [
    "/about-us",
    "/our-experts",
    "/md-chairman",
  ];

  const location = useLocation();
const currentPath = location.pathname.toLowerCase();

const isFacilityActive = facilityRoutes.some(route => currentPath.startsWith(route));
const isAboutActive = aboutRoutes.some(route => currentPath.startsWith(route));

const [isFacilityOpen, setIsFacilityOpen] = useState(false);
const [isAboutOpen, setIsAboutOpen] = useState(false);
const facilityRef = useRef(null);
const aboutRef = useRef(null);

useEffect(() => {
  const handleClickOutside = (event) => {
    if (facilityRef.current && !facilityRef.current.contains(event.target)) {
      setIsFacilityOpen(false);
    }
    if (aboutRef.current && !aboutRef.current.contains(event.target)) {
      setIsAboutOpen(false);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);
  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, []);

useEffect(() => {
  const handleScroll = () => {
    const nav = document.querySelector('.nav-head');
    if (window.scrollY > 50) {
      nav.style.top = '0px';
    } else {
      nav.style.top = '50px';
    }
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);

const handleNavClick = () => {
  setIsOpen(false);
  setIsFacilityOpen(false);
  setIsAboutOpen(false);
};
const handleFacilityToggle = () => {
  setIsFacilityOpen(prev => !prev);
  setIsAboutOpen(false);
};

const handleAboutToggle = () => {
  setIsAboutOpen(prev => !prev);
  setIsFacilityOpen(false);
};

  return (
    
      <>
      <div className="top-contact-bar">
      <div className="contact-left">
          <div className="contact-info">
            <FaPhone className="contact-icon" />
            <p>+91 98429 22443</p>
          </div>
          <div className="contact-info">
            <FaEnvelope className="contact-icon" />
            <p>salem@erodecancercentre.com</p>
          </div>
        </div>
        <div className="contact-right">
          <a href="https://www.facebook.com/erodecancercentrehospital" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="social-icon" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src={twitterX} alt="Twitter" className="social-icon x-icon" />
          </a>
          <a href="https://www.instagram.com/erodecancercentrehospital/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="social-icon" />
          </a>
        </div>
      </div>

      <div className="nav-sec">
      <div className="nav-head ">
        <div className="nav-logo">
          <img src={logo} alt="Logo" />
          <div className="logo-text">
            <h3><span style={{ color: '#f07d43' }}>S</span>alem</h3>
            <br />
            <h3><span style={{ color: '#e62780' }}>U</span>nit</h3>
          </div>
        </div>

        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        <nav className={`nav-menu ${isOpen ? 'active' : ''}`}>
        <NavLink 
          to='/' 
          className={({ isActive }) => isActive ? "nav-text active" : "nav-text"} 
          onClick={handleNavClick}
        >
          <h4>Home</h4>
        </NavLink>

        <div className={`nav-text dropdown facility-dropdown ${isFacilityActive ? 'active' : ''}`} ref={facilityRef}>
    <h4  onClick= {handleFacilityToggle}>Facility</h4>
    {isFacilityOpen &&(
  <div className="dropdown-content">
  <NavLink to="/cancer-screening"  onClick={handleNavClick}  className={({ isActive }) => isActive ? "active" : ""} ><h5>Cancer Screening</h5></NavLink>
  <NavLink to="/early-cancer-detection"  onClick={handleNavClick } className={({ isActive }) => isActive ? "active" : ""} ><h5>Early Cancer Detection</h5></NavLink>
  <NavLink to="/surgical-oncology"  onClick={handleNavClick } className={({ isActive }) => isActive ? "active" : ""} ><h5>Surgical Oncology</h5></NavLink>
  <NavLink to="/medical-oncology"  onClick={handleNavClick } className={({ isActive }) => isActive ? "active" : ""} ><h5>Medical Oncology</h5></NavLink>
  <NavLink to="/radiation-oncology"  onClick={handleNavClick } className={({ isActive }) => isActive ? "active" : ""} ><h5>Radiation Oncology</h5></NavLink>
  <NavLink to="/hdr-brachytherapy"  onClick={handleNavClick } className={({ isActive }) => isActive ? "active" : ""} ><h5>HDR Brachytherapy</h5></NavLink>
  <NavLink to="/pain-palliative-care"  onClick={handleNavClick } className={({ isActive }) => isActive ? "active" : ""} ><h5>Pain Palliative Care</h5></NavLink>
</div>
 )}
</div>

        <div className={`nav-text dropdown about-dropdown ${isAboutActive ? 'active' : ''}`} ref={aboutRef}>
          <h4 onClick={(handleAboutToggle) }>About</h4>
          {isAboutOpen && (
          <div className="dropdown-content">
            <NavLink to="/about-us" onClick={handleNavClick} className={({ isActive }) => isActive ? "active" : ""} ><h5>About Us</h5></NavLink>
            <NavLink to="/our-experts" onClick={handleNavClick} className={({ isActive }) => isActive ? "active" : ""}><h5>Our Experts</h5></NavLink>
            <NavLink to="/md-chairman" onClick={handleNavClick}  className={({ isActive }) => isActive ? "active" : ""} ><h5>MD & Chairman</h5></NavLink>
          </div>
            )}
        </div>
        <NavLink to='/news'  className={({ isActive }) => isActive ?  "nav-text active" : "nav-text"} onClick={handleNavClick}><h4>News & Events</h4></NavLink>
        <NavLink to='/Clinics' className={({ isActive }) => isActive ? "nav-text active" : "nav-text"} onClick={handleNavClick}><h4>Peripheral Clinics</h4></NavLink>
        <NavLink to='/Contact' className={({ isActive }) => isActive ? "nav-text active" : "nav-text"} onClick={handleNavClick}><h4>Contact</h4></NavLink>
      
        </nav>
      </div>
    </div>
    </>
  );
}

export default Header;
