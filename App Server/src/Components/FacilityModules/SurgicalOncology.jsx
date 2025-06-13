import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './CancerScreening.css';
import heroImg from './Assets/doc4.jpg'; 
import extraImg from './Assets/onc3.jpg'; 

function SurgicalOncologyPage() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  useEffect(() => {
      document.title = "Facility | Erode Cancer Centre Salem Unit";
    }, []);

  return (
    <>
      <div className="service-page">

        <div className="service-hero" data-aos="fade-up">
          <img src={heroImg} alt="Surgical Oncology" className="service-hero-img" />
          <div className="service-hero-overlay">
            <h1>Surgical Oncology</h1>
          </div>
        </div>

        <div className="service-content">
          <h2 data-aos="fade-up">Precision Surgery, Powerful Recovery</h2>
          <p data-aos="fade-up">
            Our surgical oncology team specializes in removing tumors with high precision and care.
            From biopsies to complex cancer resections, we follow evidence-based protocols to ensure the best outcomes.
          </p>

          <div className="image-text-section" data-aos="fade-up">
            <div className="image-text-left">
              <img src={extraImg} alt="Surgical Procedure" />
            </div>
            <div className="image-text-right">
              <h3>Advanced Surgical Approaches</h3>
              <p>
                We perform both traditional and minimally invasive surgeries depending on the tumor’s complexity and location.
                Our operating suites are equipped with state-of-the-art technology to support safe, effective procedures.
              </p>
              <p>
                Every surgery is customized for the patient's condition and recovery goals, ensuring personalized care.
              </p>
            </div>
          </div>

          <div className="service-subsection" data-aos="fade-up">
            <h3>Our Surgical Expertise Includes:</h3>
            <ul>
              <li>Breast, lung, and colorectal cancer surgeries</li>
              <li>Minimally invasive laparoscopic procedures</li>
              <li>Head & neck tumor excisions</li>
              <li>Reconstructive surgeries post-tumor removal</li>
            </ul>
          </div>

          <div className="service-subsection" data-aos="fade-up">
            <h3>Comprehensive Surgical Planning</h3>
            <p>
              Our multidisciplinary team collaborates with radiologists and medical oncologists to determine the most effective surgical approach.
              Pre-operative assessments ensure optimal safety and planning tailored to your condition.
            </p>
          </div>

          <div className="service-subsection" data-aos="fade-up">
            <h3>Support Beyond Surgery</h3>
            <p>
              Post-surgery care includes physiotherapy, nutritional counseling, and close follow-up to speed healing and reduce complications.
              Your recovery is managed with the same commitment as your surgery.
            </p>
          </div>

          <div className="service-article service-subsection" data-aos="fade-up">
            <h3>Why Surgical Oncology Matters</h3>
            <p>
              Surgery is often the first and most crucial step in cancer treatment. When performed effectively, it can remove the tumor entirely,
              reduce cancer burden, and increase the effectiveness of further treatments like chemotherapy or radiation.
            </p>
            <p>
              Our team follows international protocols and integrates the latest surgical innovations to maximize patient safety and outcomes.
            </p>
          </div>

          <div className="service-article service-subsection" data-aos="fade-up">
            <h3>Patient-Centered Decision Making</h3>
            <p>
              We believe in empowering patients with information and support. Every decision—from timing to technique—is made collaboratively,
              considering the patient’s preferences, risks, and overall treatment goals.
            </p>
          </div>

          <div className="service-cta" data-aos="fade-up">
            <h3>Consult Our Surgical Oncology Team</h3>
            <p>Book a consultation today and explore your surgical options with our compassionate specialists.</p>
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
