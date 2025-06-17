import React, { useEffect } from 'react';
import './CancerScreening.css';
import heroImg from './Assets/doc4.webp'; // Hero Image
import extraImg from './Assets/onc5.jpg'; // Replace with relevant radiation-related image
import AOS from 'aos';
import 'aos/dist/aos.css';

function RadiationOncology() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  useEffect(() => {
      document.title = "Facility | Erode Cancer Centre Salem Unit";
    }, []);

  return (
    <div className="service-page">

      <div className="service-hero" data-aos="fade-up">
        <img src={heroImg} alt="Radiation Oncology" className="service-hero-img" />
        <div className="service-hero-overlay">
          <h1>Radiation Oncology - IMRT</h1>
        </div>
      </div>

      <div className="service-content">
        <h2 data-aos="fade-up">Precision Radiation for Targeted Treatment</h2>
        <p data-aos="fade-up">
          Intensity-Modulated Radiation Therapy (IMRT) is an advanced technique in cancer care that delivers
          high-precision radiation using computer-controlled machines, tailored to the shape and size of the tumor.
        </p>

        <div className="image-text-section" data-aos="fade-up">
          <div className="image-text-left">
            <img src={extraImg} alt="IMRT Radiation Treatment" />
          </div>
          <div className="image-text-right">
            <h3>How IMRT Works</h3>
            <p>
              IMRT uses multiple beam angles with varying intensities to focus radiation on tumors while sparing
              surrounding healthy tissues. This allows us to deliver higher doses where needed without harming nearby organs.
            </p>
            <p>
              Treatment plans are designed with advanced imaging and planning software, ensuring optimal precision and safety.
            </p>
          </div>
        </div>

        <div className="service-subsection" data-aos="fade-up">
          <h3>Key Benefits of IMRT</h3>
          <ul>
            <li>Customized radiation dose delivery</li>
            <li>Minimized exposure to healthy tissues</li>
            <li>Reduced treatment-related side effects</li>
            <li>Effective for complex and hard-to-reach tumors</li>
            <li>Improved quality of life during and after therapy</li>
          </ul>
        </div>

        <div className="service-subsection" data-aos="fade-up">
          <h3>Who Can Benefit?</h3>
          <p>
            IMRT is ideal for treating cancers located near sensitive areas such as the brain, spine, prostate, head and neck,
            and gynecologic regions. It’s especially useful when traditional radiation would risk damaging critical organs.
          </p>
        </div>

        <div className="service-article service-subsection" data-aos="fade-up">
          <h3>Advanced Imaging & Planning</h3>
          <p>
            Every IMRT treatment begins with high-resolution imaging to map the tumor's exact location. Our planning software
            then develops a customized plan, balancing maximum tumor control with minimal side effects.
          </p>
          <p>
            This process ensures accuracy and consistency throughout your treatment journey.
          </p>
        </div>

        <div className="service-article service-subsection" data-aos="fade-up">
          <h3>Comfortable & Safe Environment</h3>
          <p>
            Our radiation suite is equipped with state-of-the-art machines and a calming environment to ease anxiety.
            Highly trained radiation therapists and oncologists guide you every step of the way, ensuring safety, comfort,
            and support.
          </p>
        </div>

        <div className="service-cta" data-aos="zoom-in">
          <h3>Explore IMRT with Us</h3>
          <p>Contact our radiation oncology team to learn if IMRT is right for your condition.</p>
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

export default RadiationOncology;
