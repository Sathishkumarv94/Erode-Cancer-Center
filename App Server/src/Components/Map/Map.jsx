import React from 'react';
import { motion } from 'framer-motion';
import './Map.css';

const LocationMap = () => {
  return (
    <div className="health-article-wrapper">
     
      <motion.h2
        className="map-title"
        initial={{ scale: 0.8, y: -30, opacity: 0 }}
        whileInView={{ scale: 1, y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 100, damping: 10 }}
      >
        📍 Our Location
      </motion.h2>

      <div className="health-article-container">
        
        <motion.div
          className="address-section"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 80 }}
        >
          <h3>Visit Us</h3>
          <p>No 370, Roundana<br />Kondalampatti,<br />Salem, Tamil Nadu 636010</p>
          <p>📞 0427 227 3477</p>
          <p>🕒 Mon-Fri, 9:00 AM - 5:00 PM</p>
        </motion.div>

       
        <motion.div
          className="loc-section"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 80, delay: 0.2 }}
        >
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3907.8674571094334!2d78.12344674361147!3d11.632793506748696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babef17ca13e20f%3A0x558d989e1da92002!2sKondalampatti%20bus%20stop!5e0!3m2!1sen!2sin!4v1744878785925!5m2!1sen!2sin" width="600" height="450" style={{ border: 0, borderRadius: '12px' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </motion.div>
      </div>
    </div>
  );
};

export default LocationMap;
