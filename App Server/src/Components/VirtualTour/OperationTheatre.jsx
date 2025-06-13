import React, {useEffect} from "react";
import "./FacilityDetail.css";

import otImg from "./Assets/ope.jpg"; 
import heroImg from "./Assets/ope.jpg"; 

const OperationTheatre = () => {
  useEffect(() => {
        document.title = "OperationTheatre | Erode Cancer Centre Salem Unit";
      }, []);
  return (
    <>

    <div className="facility-detail-page">
     
      <div className="hero-section">
        <img src={heroImg} alt="Operation Theatre Banner" className="hero-image" />
        <div className="hero-overlay">
          <h1 className="hero-title">Operation Theatre</h1>
          <p className="hero-subtitle">World Class Facilities</p>
        </div>
      </div>

   
      <div className="facility-detail-grid">
        <div className="facility-image">
          <img src={otImg} alt="Operation Theatre" />
        </div>
        <div className="facility-text">
          <h2>Excellence in Surgical Care</h2>
          <p>
            The Operation Theatre (OT) department at Erode Cancer Centre Salem Unit represents the epitome of precision, safety, and innovation in oncology surgery. Designed to meet international standards, our state-of-the-art OT facilities are equipped to handle a wide array of surgical procedures, from routine cancer surgeries to complex and minimally invasive interventions.
          </p>
        </div>
      </div>

     
      <div className="facility-article-section">
        <h2>Advanced OT Facilities</h2>
        <p>
          The Operation Theatres at Erode Cancer Centre Salem Unit are equipped with cutting-edge technologies and infrastructure to ensure the best surgical outcomes.
        </p>
        <ul>
          <li>Sterile Environment: Strict infection control protocols.</li>
          <li>Modern Surgical Equipment: High-definition and robotic tools.</li>
          <li>Integrated Monitoring Systems: Real-time patient tracking.</li>
          <li>Dedicated Recovery Rooms: Immediate post-op care units.</li>
        </ul>

        <h2>Comprehensive Surgical Expertise</h2>
        <ul>
          <li>Oncology Surgeries</li>
          <li>Minimally Invasive Procedures</li>
          <li>Specialized Interventions: Head, neck, thoracic, GI cancer surgeries</li>
          <li>Emergency Surgeries</li>
        </ul>

        <h2>Patient-Centric Approach</h2>
        <ul>
          <li>Pre-Surgical Counseling</li>
          <li>Personalized Care Plans</li>
          <li>Post-Surgical Support and Rehabilitation</li>
        </ul>

        <h2>Why Choose Us?</h2>
        <ul>
          <li>Cutting-Edge Infrastructure</li>
          <li>Expert Surgical Team</li>
          <li>Seamless Coordination Across Departments</li>
          <li>Stringent Safety & Hygiene Protocols</li>
        </ul>

        <p>
          At Erode Cancer Centre Salem Unit, our Operation Theatre department stands as a pillar of excellence in cancer care — delivering advanced surgeries with precision, compassion, and a focus on optimal outcomes.
        </p>
      </div>
    </div>
    </>
  );
};

export default OperationTheatre;
