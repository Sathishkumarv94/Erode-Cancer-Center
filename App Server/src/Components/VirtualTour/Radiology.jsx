import React, {useEffect} from "react";
import "./FacilityDetail.css";

import radiologyImg from "./Assets/fac7.webp"; 
import heroImg from "./Assets/rad.jpg"; 

const Radiology = () => {
  useEffect(() => {
        document.title = "Radiology| Erode Cancer Centre Salem Unit";
      }, []);
  return (
    <>
    
    <div className="facility-detail-page">
    
      <div className="hero-section">
        <img src={heroImg} alt="Radiology Banner" className="hero-image" />
        <div className="hero-overlay">
          <h1 className="hero-title">Radiology</h1>
          <p className="hero-subtitle">Precision Imaging for Accurate Diagnosis</p>
        </div>
      </div>

      
      <div className="facility-detail-grid">
        <div className="facility-image">
          <img src={radiologyImg} alt="Radiology Department" />
        </div>
        <div className="facility-text">
          <h2>Advanced Imaging Technology</h2>
          <p>
            Our Radiology department at Erode Cancer Centre Salem Unit combines state-of-the-art imaging tools with expert radiologists to ensure quick, reliable, and detailed diagnostic results. We specialize in oncology imaging for accurate treatment planning and monitoring.
          </p>
        </div>
      </div>

      
      <div className="facility-article-section">
        <h2>Our Services</h2>
        <ul>
          <li><strong>CT Scan:</strong> Multi-slice CT imaging for high-resolution visualization of internal organs and tumors.</li>
          <li><strong>MRI:</strong> Detailed soft tissue imaging ideal for brain, spine, and musculoskeletal diagnosis.</li>
          <li><strong>Ultrasound:</strong> Non-invasive imaging for abdominal, pelvic, and vascular diagnostics.</li>
          <li><strong>Digital X-Ray:</strong> Instant imaging with lower radiation dose and superior clarity.</li>
          <li><strong>Interventional Radiology:</strong> Minimally invasive, image-guided procedures for biopsy and targeted therapies.</li>
        </ul>

        <h2>Why Our Radiology Department Stands Out</h2>
        <ul>
          <li>Latest Generation Scanners & Imaging Platforms</li>
          <li>Specialist Oncology-Focused Imaging</li>
          <li>24x7 Emergency Radiology Support</li>
          <li>Integrated PACS System for Seamless Reporting</li>
        </ul>

        <p>
          At Erode Cancer Centre Salem Unit, our Radiology team is committed to delivering precision diagnostics that form the backbone of effective cancer treatment. Our compassionate approach, combined with the latest technology, ensures that every patient receives timely, accurate, and comfortable care.
        </p>
      </div>
    </div>
    </>
  );
};

export default Radiology;
