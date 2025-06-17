import React,{useState,useEffect} from "react";
import "./FacilityDetail.css";
import dayCareImg from "./Assets/Ward2.jpg"; 
import heroImg from "./Assets/ward1.webp";   

const DayCare = () => {
  useEffect(() => {
        document.title = "DayCare | Erode Cancer Centre Salem Unit";
      }, []);
  return (
    <>
    
    <div className="facility-detail-page">
     
      <div className="hero-section">
        <img src={heroImg} alt="Day Care Banner" className="hero-image" />
        <div className="hero-overlay">
          <h1 className="hero-title">Day Care</h1>
          <p className="hero-subtitle">Efficient Care, Minimal Disruption</p>
        </div>
      </div>

     
      <div className="facility-detail-grid">
        <div className="facility-image">
          <img src={dayCareImg} alt="Day Care Facility" />
        </div>
        <div className="facility-text">
          <h2>Comprehensive Outpatient Cancer Care</h2>
          <p>
            Our Day Care unit is designed for patients who require treatments like chemotherapy, minor procedures, or infusions that don’t need overnight admission. It ensures patient comfort while allowing them to return home the same day.
          </p>
        </div>
      </div>

      
      <div className="facility-article-section">
        <h2>Features of Our Day Care Unit</h2>
        <ul>
          <li><strong>Dedicated Oncology Nurses:</strong> Trained in administering chemotherapy and managing side effects.</li>
          <li><strong>Comfortable Recliners:</strong> Relaxing and private bays for infusions and observations.</li>
          <li><strong>On-Call Doctors:</strong> Continuous supervision by oncologists during procedures.</li>
          <li><strong>Pharmacy Integration:</strong> In-house pharmacy ensures quick and safe delivery of cancer drugs.</li>
        </ul>

        <h2>Benefits to Patients</h2>
        <ul>
          <li>Minimizes hospital stay while ensuring expert monitoring.</li>
          <li>Reduces infection risks compared to inpatient treatment.</li>
          <li>Improves convenience and flexibility in care plans.</li>
          <li>Cost-effective without compromising quality of treatment.</li>
        </ul>

        <p>
          The Day Care unit at Erode Cancer Centre Salem Unit reflects our commitment to patient-centered care. We prioritize clinical efficiency, patient comfort, and personalized treatment — all within a few dedicated hours of care per visit.
        </p>
      </div>
    </div>
    </>
  );
};

export default DayCare;
