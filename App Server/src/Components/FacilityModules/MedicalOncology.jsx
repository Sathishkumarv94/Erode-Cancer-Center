import React, { useEffect } from 'react';
import './CancerScreening.css'; // Ensure your CSS handles shared styles
import heroImg from './Assets/doc4.jpg';
import extraImg from './Assets/onc4.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

function MedicalOncology() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  useEffect(() => {
      document.title = "Facility | Erode Cancer Centre Salem Unit";
    }, []);

  return (
    <div className="service-page">

      <section className="service-hero" data-aos="fade-up">
        <img src={heroImg} alt="Doctor in Medical Oncology department" className="service-hero-img" />
        <div className="service-hero-overlay">
          <h1>Medical Oncology</h1>
        </div>
      </section>

      <div className="service-content">
        <section data-aos="fade-up">
          <h2>Compassionate Cancer Therapy</h2>
          <p>
            Medical Oncology focuses on treating cancer using systemic therapies such as chemotherapy, immunotherapy,
            and targeted therapy. At our center, we ensure every patient receives treatment tailored to their specific
            cancer type and condition.
          </p>
        </section>

        <section className="image-text-section" data-aos="fade-up">
          <div className="image-text-left">
            <img src={extraImg} alt="Medical Oncology Treatment Care" />
          </div>
          <div className="image-text-right">
            <h3>Advanced Cancer Treatment Options</h3>
            <p>
              With access to the latest innovations in oncology, our patients benefit from personalized treatment
              plans designed using global evidence-based protocols. Our care is tailored, compassionate, and precise.
            </p>
            <p>
              We conduct thorough diagnostics including molecular profiling to identify the best possible treatment
              path for each patient.
            </p>
          </div>
        </section>

        <section className="service-subsection" data-aos="fade-up">
          <h3>Our Treatment Options</h3>
          <ul>
            <li>Advanced chemotherapy protocols</li>
            <li>Personalized immunotherapy regimens</li>
            <li>Targeted therapy based on genetic testing</li>
            <li>Hormonal therapy for hormone-sensitive cancers</li>
            <li>Supportive medications to manage side effects</li>
          </ul>
        </section>

        <section className="service-subsection" data-aos="fade-up">
          <h3>Patient-Centered Care</h3>
          <p>
            We believe in empowering patients through education and involvement in every step of their treatment.
            Our multidisciplinary tumor board reviews complex cases to create the most effective treatment strategies.
          </p>
        </section>

        <section className="service-subsection" data-aos="fade-up">
          <h3>Safe & Comfortable Environment</h3>
          <p>
            Our modern oncology unit features private infusion bays, expert pain and nausea management, and emotional
            support from trained oncology nurses and counselors. We ensure every patient feels safe and cared for
            throughout their journey.
          </p>
        </section>

        <section className="service-article service-subsection" data-aos="fade-up">
          <h3>Why Choose Medical Oncology?</h3>
          <p>
            Systemic therapies form the foundation of modern cancer treatment. When administered skillfully, they can
            shrink tumors, stop cancer spread, and enhance the effects of surgery or radiation.
          </p>
          <p>
            Our expert team evaluates every case deeply, ensuring your therapy plan is effective while minimizing
            side effects and maximizing quality of life.
          </p>
        </section>

        <section className="service-article service-subsection" data-aos="fade-up">
          <h3>Continuous Monitoring & Care</h3>
          <p>
            Treatment doesn’t stop after infusion. We closely monitor each patient with bloodwork, imaging, and
            wellness assessments to adjust therapies when needed and manage potential side effects proactively.
          </p>
        </section>

        <section className="service-cta" data-aos="zoom-in">
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
        </section>
      </div>
    </div>
  );
}

export default MedicalOncology;
