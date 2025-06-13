import React, {useEffect} from "react";
import "./FacilityDetail.css";

import labImg from "./Assets/lab2.jpg";
import heroImg from "./Assets/lab.jpg"

const Laboratory = () => {
  useEffect(() => {
        document.title = "Laboratory | Erode Cancer Centre Salem Unit";
      }, []);
  return (
    <>

    <div className="facility-detail-page">
   
    <div className="hero-section">
      <img src={heroImg} alt="Laboratory Banner" className="hero-image" />
      <div className="hero-overlay">
        <h1 className="hero-title">Laboratory</h1>
        <p className="hero-subtitle">Where Precision Meets Innovation</p>
      </div>
    </div>

  
    <div className="facility-detail-grid">
      <div className="facility-image">
        <img src={labImg} alt="Laboratory" />
      </div>
      <div className="facility-text">
        <h2>Precision Diagnostics</h2>
        <p>
          Our laboratory features cutting-edge diagnostic equipment and is
          staffed by expert technicians, delivering fast and accurate test
          results to support advanced medical care.
        </p>
      </div>
    </div>

 
    <div className="facility-article-section">
      <h2>Haematology</h2>
      <p>
      Hematology is study of disease of blood and blood components. It deals with anemia, bleeding disorders and also blood cancers like leukemia, myelomas and lymphomas. In Thangam hospital we deal with many blood cancers and we have successfully completed numerous bone marrow transplants.

We have the latest technology of 3 laser 13 color flowcytometry for diagnosis of blood cancers and their various subtypes. For accurately diagnosing causes of anemia we have an array of tests which are run on world class technology. Numerous coagulopathies and hemoglobinopathies are also worked up.
      </p>

      <h2>Biochemistry</h2>
      <h2>
        ROCHE- COBAS c 311 analyzer for clinical chemistry...
      </h2>
      <p>
      The cobas c 311 analyzer is a stand alone system that offers consolidated testing from a broad menu of clinical chemistry applications. This analyzer has the capacity for ion-selective electrode (ISE) determination of sodium, potassium, and chloride in serum, plasma, and urine. In addition, measurement of HbA1c levels in whole blood can also be performed, making it a truly flexible analyzer. The type of specimen to be used includes serum, urine, cerebrospinal fluid, hemolysate, whole blood and plasma that are used for detecting and/or measuring analytes covered by the specific assays.
      </p>

      <h2>Performance</h2>
      <ul>
        <li>Predictable turnaround time</li>
        <li>Intelligent sample workflow</li>
        <li>108 sample positions with flexible STAT settings</li>
        <li>Automatic sample integrity checks</li>
      </ul>
    </div>
  </div>
  </>
  );
};

export default Laboratory;
