import React, { useEffect } from 'react';
import './CancerScreening.css';
import heroImg from './Assets/doc4.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';


function PainPalliativeCare() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
    
    <div className="service-page">
      {/* Hero Section */}
      <div className="service-hero">
        <img src={heroImg} alt="Pain & Palliative Care" className="service-hero-img" />
        <div className="service-hero-overlay">
          <h1>Pain & Palliative Care</h1>
        </div>
      </div>

     
      {/* Content Section */}
      <div className="service-content">
        <h2 data-aos="fade-right">Holistic Care with Dignity & Comfort</h2>
        <p data-aos="fade-left">
          Our Pain & Palliative Care program focuses on improving quality of life for patients facing serious illnesses. We offer compassionate support to manage pain, symptoms, and emotional challenges.
        </p>

        <div className="service-subsection" data-aos="fade-up">
          <h3>What We Offer</h3>
          <ul>
            <li>Comprehensive pain management plans</li>
            <li>Psychological and spiritual support</li>
            <li>Nutrition and wellness guidance</li>
            <li>Supportive care for both patients and families</li>
            <li>End-of-life care with dignity</li>
          </ul>
        </div>

        <div className="service-subsection" data-aos="fade-up">
          <h3>Why Choose Palliative Care?</h3>
          <p>
            Palliative care empowers patients to live as actively and comfortably as possible. Our team works alongside oncologists and specialists to ensure seamless, person-centered care.
          </p>
        </div>

        <div className="service-subsection" data-aos="fade-up">
          <h3>Is It Right for You?</h3>
          <p>
            This service is ideal for those with advanced cancer or chronic conditions. Whether receiving curative treatment or not, palliative care enhances comfort and emotional well-being.
          </p>
        </div>

        <div className="service-cta" data-aos="zoom-in">
          <h3>Talk to a Care Specialist</h3>
          <p>Reach out to understand how we can support your journey with empathy and expertise.</p>
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

export default PainPalliativeCare;
