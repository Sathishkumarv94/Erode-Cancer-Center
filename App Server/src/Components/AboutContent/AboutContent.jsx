import React from 'react';
import './AboutContent.css';
import aboutImage from './Assets/front1.webp'; 
import AOS from 'aos';
import 'aos/dist/aos.css';
import  { useEffect } from 'react';// replace with your actual image path

const AboutContent = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 }); // optional duration
      }, []);
  return (
    <section className="about-section">
      <div className="container">
        <div className="about-content">
          <div className="about-image" data-aos="fade-up">
            <img src={aboutImage} alt="About Our Hospital" />
          </div>
          <div className="about-text" data-aos="fade-left">
            <h2>About Our Hospital</h2>
            <p>
              We are dedicated to providing world-class healthcare services with compassion and excellence.
              Our multi-specialty hospital brings together advanced technology and a team of skilled medical professionals.
            </p>
            <ul>
              <li><strong>Founded:</strong> 2005</li>
              <li><strong>Departments:</strong> Oncology, Cardiology, Pediatrics, Neurology</li>
              <li><strong>Mission:</strong> To deliver compassionate, patient-centered care with integrity.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutContent;
