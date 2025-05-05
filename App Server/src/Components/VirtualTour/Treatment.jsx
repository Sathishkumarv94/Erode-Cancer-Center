import React from "react";
import "./FacilityDetail.css";
import treatImg from "./Assets/fac9.webp"; // Image for grid section
import heroImg from "./Assets/treat.jpg"; // Hero banner image


const Treatments = () => {
  return (
    <>
    
    <div className="facility-detail-page">
      {/* Hero Section */}
      <div className="hero-section">
        <img src={heroImg} alt="Treatments Banner" className="hero-image" />
        <div className="hero-overlay">
          <h1 className="hero-title">Cancer Treatments</h1>
          <p className="hero-subtitle">Personalized, Comprehensive, and Compassionate</p>
        </div>
      </div>

      {/* Grid Section */}
      <div className="facility-detail-grid">
        <div className="facility-image">
          <img src={treatImg} alt="Cancer Treatments" />
        </div>
        <div className="facility-text">
          <h2>Multi-Modal Cancer Treatment</h2>
          <p>
            At Erode Cancer Centre, we provide tailored treatment plans combining surgery, chemotherapy, radiation therapy, and targeted therapies, offering holistic care for every stage of cancer.
          </p>
        </div>
      </div>

      {/* Article Section */}
      <div className="facility-article-section">
        <h2>Key Treatment Modalities</h2>
        <ul>
          <li><strong>Surgical Oncology:</strong> Tumor removal and organ-sparing surgeries with reconstructive options.</li>
          <li><strong>Medical Oncology:</strong> Chemotherapy, immunotherapy, hormonal therapy, and targeted therapy.</li>
          <li><strong>Radiation Oncology:</strong> Precision treatments using external beam and brachytherapy techniques.</li>
          <li><strong>Palliative Care:</strong> Symptom management and supportive care to improve quality of life.</li>
        </ul>

        <h2>Personalized Cancer Therapy</h2>
        <p>
          Each treatment plan is customized based on the patient’s cancer type, stage, and genetic profile. Our multidisciplinary tumor board reviews every case to ensure a comprehensive and evidence-based approach.
        </p>

        <h2>Support Services</h2>
        <ul>
          <li>Psychological counseling and nutrition planning.</li>
          <li>Rehabilitation and physiotherapy support.</li>
          <li>Financial and social work assistance.</li>
        </ul>

        <p>
          With cutting-edge facilities and a compassionate team, Erode Cancer Centre is committed to delivering not just treatment but hope, healing, and support throughout the cancer journey.
        </p>
      </div>
    </div>
    </>
  );
};

export default Treatments;
