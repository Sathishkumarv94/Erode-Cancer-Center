import React, { useEffect } from 'react';
import './CancerScreening.css';
import heroImg from './Assets/doc4.webp';  // Hero image, can keep same or change
import extraImg from './Assets/onc6.jpg'; // New image for the left-side (replace with actual)
import AOS from 'aos';
import 'aos/dist/aos.css';

function HDRBrachytherapy() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  useEffect(() => {
      document.title = "Facility | Erode Cancer Centre Salem Unit";
    }, []);

  return (
    <div className="service-page">

      <div className="service-hero" data-aos="fade-up">
        <img src={heroImg} alt="HDR Brachytherapy" className="service-hero-img" />
        <div className="service-hero-overlay">
          <h1>HDR Brachytherapy</h1>
        </div>
      </div>

      <div className="service-content">
        <h2 data-aos="fade-up">Targeted Internal Radiation Therapy</h2>
        <p data-aos="fade-up">
          High Dose Rate (HDR) Brachytherapy delivers concentrated radiation directly into or near the tumor using tiny applicators.
          This technique is highly effective while minimizing damage to nearby healthy tissue.
        </p>

        <div className="image-text-section" data-aos="fade-up">
          <div className="image-text-left">
            <img src={extraImg} alt="HDR Brachytherapy Treatment" />
          </div>
          <div className="image-text-right">
            <h3>How It Works</h3>
            <p>
              A radioactive source is temporarily placed within body cavities or directly into tumor tissues using applicators.
              The source emits precise radiation in a short period before being safely removed.
            </p>
            <p>
              This internal approach allows high doses of radiation to target tumors precisely, sparing healthy tissue.
            </p>
          </div>
        </div>

        <div className="service-subsection" data-aos="fade-up">
          <h3>Advantages of HDR Brachytherapy</h3>
          <ul>
            <li>Short, outpatient treatment sessions</li>
            <li>Minimally invasive and highly focused</li>
            <li>Less recovery time and fewer side effects</li>
            <li>Ideal for gynecologic, breast, and prostate cancers</li>
          </ul>
        </div>

        <div className="service-subsection" data-aos="fade-up">
          <h3>Who Should Consider It?</h3>
          <p>
            HDR Brachytherapy is an excellent option for patients with localized tumors and can be used alone or
            alongside external radiation therapy for better outcomes.
          </p>
        </div>

        <div className="service-article service-subsection" data-aos="fade-up">
          <h3>Personalized Treatment Planning</h3>
          <p>
            Each patient's treatment is carefully planned using advanced imaging and computer modeling to ensure
            maximum effectiveness and minimal side effects.
          </p>
          <p>
            Our team of radiation oncologists and therapists work closely to deliver a safe, precise therapy tailored to you.
          </p>
        </div>

        <div className="service-article service-subsection" data-aos="fade-up">
          <h3>Comfort & Care</h3>
          <p>
            Treatments are performed in a supportive environment with the latest technology, ensuring patient comfort
            and safety throughout the therapy sessions.
          </p>
        </div>

        <div className="service-cta" data-aos="zoom-in">
          <h3>Consult Our Experts</h3>
          <p>Learn more about how HDR Brachytherapy can be part of your personalized cancer treatment plan.</p>
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
  );
}

export default HDRBrachytherapy;
