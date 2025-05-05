import React from "react";
import "./FacilityDetail.css";

import icuImg from "./Assets/fac8.webp"; // Image for grid section
import heroImg from "./Assets/icu.jpg"; // Hero banner image

const ICU = () => {
  return (
    <>
    
    <div className="facility-detail-page">
      {/* Hero Section */}
      <div className="hero-section">
        <img src={heroImg} alt="ICU Banner" className="hero-image" />
        <div className="hero-overlay">
          <h1 className="hero-title">Intensive Care Unit (ICU)</h1>
          <p className="hero-subtitle">Critical Support, Compassionate Care</p>
        </div>
      </div>

      {/* Grid Section */}
      <div className="facility-detail-grid">
        <div className="facility-image">
          <img src={icuImg} alt="ICU Facility" />
        </div>
        <div className="facility-text">
          <h2>Round-the-Clock Critical Care</h2>
          <p>
            Our ICU is equipped with advanced life-support systems and managed by a specialized team of intensivists and nurses, providing 24/7 care for critically ill cancer patients.
          </p>
        </div>
      </div>

      {/* Article Section */}
      <div className="facility-article-section">
        <h2>Specialized ICU Features</h2>
        <ul>
          <li><strong>Advanced Ventilators:</strong> For respiratory support and critical care management.</li>
          <li><strong>Central Monitoring:</strong> Real-time tracking of vital parameters with immediate response protocols.</li>
          <li><strong>Isolation Facilities:</strong> Designed to reduce infection risk for immunocompromised patients.</li>
          <li><strong>Dedicated Critical Care Team:</strong> Intensivists, anesthesiologists, and critical care nurses trained in oncology emergencies.</li>
        </ul>

        <h2>Clinical Capabilities</h2>
        <ul>
          <li>Management of post-surgical complications in cancer patients.</li>
          <li>Handling of sepsis, respiratory failure, and electrolyte imbalances.</li>
          <li>Emergency intervention and stabilization of critical cases.</li>
          <li>Supportive care for patients undergoing aggressive treatments.</li>
        </ul>

        <p>
          The ICU at Erode Cancer Centre combines cutting-edge technology with a patient-focused approach. Our priority is to stabilize and support patients with compassion and expertise during the most vulnerable stages of their treatment journey.
        </p>
      </div>
    </div>
    </>
  );
};

export default ICU;
