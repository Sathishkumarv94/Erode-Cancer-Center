import React from "react";
import "./DoctorsSection.css";

import doc1 from "./Assets/doctor1.jpg";
import doc2 from "./Assets/doctor5.webp";
import doc3 from "./Assets/doctor3.jpg";
import doc4 from "./Assets/doctor12.webp"
import doc5 from './Assets/doctor7.webp'
import doc6 from "./Assets/doctor14.jpg"
import doc7 from './Assets/doctor15.jpg'
import doc8 from './Assets/doctor9.webp'
import doc9 from './Assets/doctor6.webp'
import doc10 from './Assets/doctor13.webp'
import doc11 from './Assets/doctor10.webp'
import doc12 from './Assets/doctor4.jpg'

const doctors = [
  {
    name: "Dr K.Velavan MD.,RT.,",
    role: "Sr. Consultant Radiation Oncologist",
    image: doc1,
  },
  {
    name: "Dr. G. Mohan MD",
    role: "DD & Insurance Medical Officer",
    image: doc3,
  },
  {
    name: "Dr Sridhar A MBBS, DNB RT.",
    role: "Radiation Oncologist",
    image: doc2,
  },
  {
    name: "Dr Visalini A BDS.",
    role: "Duty Medical Officer",
    image: doc4,
  },
  {
    name: "Dr. Nikhila P C, MBBS, MDRT.",
    role: "Radiation Oncologist",
    image: doc5,
  },
  {
    name: "Dr. Kowsalya BEMS, B.Sc (Psy).",
    role: "Duty Medical Officer",
    image: doc6,
  },
  {
    name: "Dr Sathiyan K MBBS, MDRT",
    role: "Radiation Oncologist & Registar",
    image: doc7,
  },
  {
    name: "Dr Shradha MBBS, MDRT.",
    role: "Radiation Oncologist",
    image: doc8,
  },
  
];


const DoctorsSection = () => {
  return (
    <>
    
    <section className="doctors-section">
      <h2 className="section-title">Meet Our Doctors</h2>
      <div className="doctors-grid">
        {doctors.map((doc, index) => (
          <div className="doctor-card" key={index}>
            <div className="image-border">
              <img src={doc.image} alt={doc.name} className="doctor-image" />
            </div>
            <h4 className="doctor-name">{doc.name}</h4>
            <p className="doctor-specialty">{doc.role}</p>
          </div>
        ))}
      </div>
      
    </section>
    </>
  );
};

export default DoctorsSection;
