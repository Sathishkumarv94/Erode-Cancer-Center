import React from 'react';
import './Footer.css';
import { FaFacebookF, FaInstagram, FaLinkedin, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import logo from './Assets/logo2.webp'; // Update path if needed

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Column 1: Logo + Social */}
        <div className="footer-column logo-section">
          <img src={logo} alt="Hospital Logo" className="footer-logo" />
          <p className="tagline">Your trusted partner in cancer care and healing.</p>
          <h4 className="footer-title">Follow Us</h4>
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedin /></a>
          </div>
        </div>

        {/* Column 2: Navigation Titles */}
        <div className="footer-column nav-section">
          <h4 className="footer-title">Navigation</h4>
          <p className="footer-link">Home</p>
          <p className="footer-link">Facility</p>
          <p className="footer-link">About</p>
          <p className="footer-link">News & Events</p>
          <p className="footer-link">Contact</p>
        </div>

        {/* Column 3: Contact Info */}
        <div className="footer-column contact-section">
          <h4 className="footer-title">Contact Info</h4>
          <p><FaMapMarkerAlt /> No 370, Roundana, Kondalampatti, Salem, Tamil Nadu 636010</p>
          <p><FaPhoneAlt /> 0427 227 3477</p>
          <p><FaEnvelope /> info@erodecancercentre.com</p>
        </div>

        {/* Column 4: PRO Contact */}
        <div className="footer-column pro-section">
          <h4 className="footer-title">PRO Contact</h4>
          <p>Mr. Anbarasu: +91 90473 09191</p>
          <p>Mr. Arunraj: +91 95668 75990</p>
          <p>Mr. Mayilvaganan: +91 94426 46691</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2025 Erode Cancer Centre. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
