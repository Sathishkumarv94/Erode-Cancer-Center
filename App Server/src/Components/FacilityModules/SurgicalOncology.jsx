import React from 'react';
import './CancerScreening.css';
import heroImg from './Assets/doc4.jpg';


import AOS from 'aos';
import 'aos/dist/aos.css';

import { useEffect } from 'react';

function SurgicalOncologyPage() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>  
    
     <div className="service-page">
      {/* Hero Section */}
      <div className="service-hero">
        <img src={heroImg} alt="Surgical Oncology" className="service-hero-img" />
        <div className="service-hero-overlay">
          <h1>Surgical Oncology</h1>
        </div>
      </div>

      {/* Main Image */}
      

      {/* Content */}
      <div className="service-content">
        <h2 data-aos="fade-right">Precision Surgery, Powerful Recovery</h2>
        <p data-aos="fade-left">
          Our surgical oncology team specializes in removing tumors with high precision and care. From biopsies to complex cancer resections, we follow evidence-based protocols to ensure the best outcomes.
        </p>

        <div className="service-subsection" data-aos="fade-up">
          <h3>Our Expertise</h3>
          <ul>
            <li>Breast, lung, and colorectal cancer surgeries</li>
            <li>Minimally invasive laparoscopic surgeries</li>
            <li>Head & neck tumor excisions</li>
            <li>Reconstructive procedures post-tumor removal</li>
          </ul>
        </div>

        <div className="service-subsection" data-aos="fade-up">
          <h3>Comprehensive Surgical Planning</h3>
          <p>
            Every patient undergoes detailed pre-operative assessments. Our team works closely with radiologists and oncologists to plan the most effective surgical route while minimizing impact on healthy tissues.
          </p>
        </div>

        <div className="service-subsection" data-aos="fade-up">
          <h3>Post-Surgery Care</h3>
          <p>
            Recovery is supported through physiotherapy, nutrition guidance, and regular monitoring. We ensure every patient receives personalized rehabilitation for faster healing and quality of life.
          </p>
        </div>

        <div className="service-cta" data-aos="zoom-in">
          <h3>Schedule a Consultation</h3>
          <p>Speak to our surgical oncologists today and explore the right approach for your condition.</p>
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

export default SurgicalOncologyPage;
