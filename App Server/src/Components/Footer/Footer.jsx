import React from 'react';
import {NavLink } from 'react-router-dom';
import './Footer.css';
import twitterX from './Assets/twitter.png'; 

import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt ,  FaFacebook, FaInstagram } from 'react-icons/fa';

import logo from './Assets/logo2.webp';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-column logo-section">
          <img src={logo} alt="Hospital Logo" className="footer-logo" />
          <p className="tagline">Your trusted partner in cancer care and healing.</p>
          <h4 className="footer-title">Follow Us</h4>
          <div className="social-icons">
            <a href="https://www.facebook.com/erodecancercentrehospital" target="_blank" rel="noopener noreferrer">
                        <FaFacebook className="socials-icon" />
                      </a>
                      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <img src={twitterX} alt="Twitter" className="socials-icon xs-icon" />
                      </a>
                      <a href="https://www.instagram.com/erodecancercentrehospital/" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="socials-icon" />
                      </a>
          </div>
        </div>

        <div className="footer-column nav-section">
          <h4 className="footer-title">Navigation</h4>
          <NavLink className="footer-link" to="/">Home</NavLink>
          <NavLink className="footer-link" to="/about-us">About Us</NavLink>
          <NavLink className="footer-link" to="/our-experts">Our Experts</NavLink>
          <NavLink className="footer-link" to="/contact">Contact</NavLink>
          <NavLink className="footer-link" to="/blogs">News & Blogs</NavLink>
        </div>

        <div className="footer-column contact-section">
          <h4 className="footer-title">Contact Info</h4>
          <p><FaMapMarkerAlt /> No 370, Roundana, Kondalampatti, Salem, Tamil Nadu 636010</p>
          <p><FaPhoneAlt /> 0427 227 3477</p>
          <p><FaEnvelope /> info@erodecancercentre.com</p>
        </div>

        <div className="footer-column pro-section">
          <h4 className="footer-title">PRO Contact</h4>
          <p>Mr. Anbarasu: +91 90473 09191</p>
          <p>Mr. Arunraj: +91 95668 75990</p>
          <p>Mr. Mayilvaganan: +91 94426 46691</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2025 Erode Cancer Centre Salem Unit. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
