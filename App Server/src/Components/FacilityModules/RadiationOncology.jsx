import React, { useEffect } from 'react';
import './CancerScreening.css';
import heroImg from './Assets/doc4.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';


function RadiationOncology() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
    
    <div className="service-page">
      {/* Hero Section */}
      <div className="service-hero">
        <img src={heroImg} alt="Radiation Oncology" className="service-hero-img" />
        <div className="service-hero-overlay">
          <h1>Radiation Oncology - IMRT</h1>
        </div>
      </div>

      {/* Supporting Image */}
      
      {/* Main Content */}
      <div className="service-content">
        <h2 data-aos="fade-right">Precision Radiation for Targeted Treatment</h2>
        <p data-aos="fade-left">
          Intensity-Modulated Radiation Therapy (IMRT) is an advanced mode of high-precision radiotherapy that uses computer-controlled linear accelerators to deliver precise radiation doses to cancerous tumors.
        </p>

        <div className="service-subsection" data-aos="fade-up">
          <h3>How IMRT Works</h3>
          <p>
            IMRT uses multiple radiation beam angles with varying intensities. It minimizes exposure to surrounding healthy tissues while accurately focusing radiation on the tumor, improving outcomes and reducing side effects.
          </p>
        </div>

        <div className="service-subsection" data-aos="fade-up">
          <h3>Key Benefits</h3>
          <ul>
            <li>High-precision treatment for complex tumor shapes</li>
            <li>Lower risk of damage to nearby healthy organs</li>
            <li>Reduced side effects compared to conventional therapy</li>
            <li>Shorter recovery time and better quality of life</li>
          </ul>
        </div>

        <div className="service-subsection" data-aos="fade-up">
          <h3>Who Can Benefit?</h3>
          <p>
            IMRT is used in the treatment of various cancers, including prostate, head and neck, brain, breast, and gynecological cancers. It is especially useful in cases where tumors are located near sensitive organs.
          </p>
        </div>

        <div className="service-cta" data-aos="zoom-in">
          <h3>Explore IMRT with Us</h3>
          <p>Talk to our radiation oncologists to see if IMRT is the right choice for your treatment.</p>
          <a
  href="https://api.whatsapp.com/send?phone=919842922443"
  target="_blank"
  rel="noopener noreferrer"
  className="cta-button"
>
  Book Appointment
</a>
        </div>
      </div>
    </div>
    </>
  );
}

export default RadiationOncology;
