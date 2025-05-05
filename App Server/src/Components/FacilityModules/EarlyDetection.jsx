import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './CancerScreening.css';
import heroImg from './Assets/doc4.jpg'; // Hero image
import supportImg from './Assets/fac1.jpeg'; // Supporting image


function EarlyDetection() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
    
    <div className="service-page">
    {/* Hero Section */}
    <div className="service-hero" data-aos="fade-up">
      <img src={heroImg} alt="Early Cancer Detection" className="service-hero-img" />
      <div className="service-hero-overlay">
        <h1>Early Cancer Detection</h1>
      </div>
    </div>

    {/* Supporting Image */}
    <div className="service-support-img" data-aos="zoom-in">
      <img src={supportImg} alt="Early Detection Process" />
    </div>

    {/* Content Section */}
    <div className="service-content">
      <h2 data-aos="fade-up">Proactive Steps for Lifesaving Impact</h2>
      <p data-aos="fade-up">
        Early detection can dramatically increase the chances of successful treatment. Our clinic offers
        cutting-edge diagnostic tools and expert evaluation to catch cancer before symptoms appear.
      </p>

      <div className="service-subsection" data-aos="fade-up">
        <h3>Our Diagnostic Tools Include:</h3>
        <ul>
          <li>Low-dose CT scans for lung cancer</li>
          <li>Ultrasound and MRI imaging</li>
          <li>Biomarker blood testing</li>
          <li>Genetic risk analysis</li>
          <li>Non-invasive screening options</li>
        </ul>
      </div>

      <div className="service-subsection" data-aos="fade-up">
        <h3>Why Early Detection Matters</h3>
        <p>
          Early diagnosis reduces cancer mortality. It provides better treatment choices, improved survival rates,
          and less aggressive interventions. Our team supports you through every step—from screening to results.
        </p>
      </div>

      {/* New Extended Content */}
      <div className="service-article service-subsection" data-aos="fade-up">
        <h3>Understanding the Science Behind Early Detection</h3>
        <p>
          Cancer often begins developing long before symptoms become noticeable. By the time physical signs appear,
          the disease may have already advanced. This is where early detection plays a vital role—it identifies
          abnormal cell changes at a microscopic level, even before they become cancerous.
        </p>
        <p>
          Tools like mammograms, colonoscopies, and blood marker tests help detect tumors in their earliest stages,
          when they're more treatable and less likely to spread. Our center uses AI-enhanced diagnostics and
          precision imaging to uncover hidden risks.
        </p>
      </div>

      <div className="service-article service-subsection" data-aos="fade-up">
        <h3>Who Should Get Screened?</h3>
        <p>
          While anyone can benefit from early screening, it's especially crucial for individuals with family history
          of cancer, smokers, people over 40, and those exposed to certain environmental or occupational risks.
          Our physicians provide personalized screening plans based on your health profile and risk category.
        </p>
      </div>

      <div className="service-article service-subsection" data-aos="fade-up">
        <h3>Take the First Step Today</h3>
        <p>
          Prevention begins with awareness. Whether you’re looking for peace of mind or addressing a known risk,
          we’re here to guide you through the early detection process. With compassion and technology on your side,
          you’ll feel empowered to take control of your health.
        </p>
      </div>

      <div className="service-cta" data-aos="fade-up">
        <h3>Get Screened Early</h3>
        <p>Don’t wait for symptoms. Schedule an early cancer detection consultation today.</p>
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

export default EarlyDetection;
