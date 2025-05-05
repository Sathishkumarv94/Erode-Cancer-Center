import React, { useEffect } from 'react';
import './CancerScreening';
import heroImg from './Assets/doc4.jpg';


import AOS from 'aos';
import 'aos/dist/aos.css';

function MedicalOncology() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
    
    <div className="service-page">
      {/* Hero Section */}
      <div className="service-hero">
        <img src={heroImg} alt="Medical Oncology" className="service-hero-img" />
        <div className="service-hero-overlay">
          <h1>Medical Oncology</h1>
        </div>
      </div>

      {/* Supporting Image */}
     

      {/* Content */}
      <div className="service-content">
        <h2 data-aos="fade-right">Compassionate Cancer Therapy</h2>
        <p data-aos="fade-left">
          Medical Oncology focuses on treating cancer using systemic therapies such as chemotherapy, immunotherapy, and targeted therapy. At our center, we ensure every patient receives treatment tailored to their specific cancer type and condition.
        </p>

        <div className="service-subsection" data-aos="fade-up">
          <h3>Our Treatment Options</h3>
          <ul>
            <li>Advanced chemotherapy protocols</li>
            <li>Personalized immunotherapy regimens</li>
            <li>Targeted therapy based on genetic testing</li>
            <li>Hormonal therapy for hormone-sensitive cancers</li>
            <li>Supportive medications to manage side effects</li>
          </ul>
        </div>

        <div className="service-subsection" data-aos="fade-up">
          <h3>Patient-Centered Care</h3>
          <p>
            We believe in empowering patients through education and involvement in every step of their treatment. Our multidisciplinary tumor board reviews complex cases for optimal planning.
          </p>
        </div>

        <div className="service-subsection" data-aos="fade-up">
          <h3>Safe & Comfortable Environment</h3>
          <p>
            Our medical oncology unit is designed for comfort, featuring private infusion bays, pain and nausea management, and emotional support from our oncology nurses and counselors.
          </p>
        </div>

        <div className="service-cta" data-aos="zoom-in">
          <h3>Start Your Treatment Journey</h3>
          <p>Contact us for expert consultation and personalized medical oncology care.</p>
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

export default MedicalOncology;
