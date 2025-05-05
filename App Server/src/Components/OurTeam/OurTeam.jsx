import React, { useEffect } from "react";
import './OurTeam.css'
import AOS from "aos";
import "aos/dist/aos.css"; 
import doc1 from "./Assets/doctor1.jpg";
import doc2 from "./Assets/doctor5.webp";
import doc3 from "./Assets/doctor3.jpg";
import doc4 from "./Assets/doctor12.webp"
import doc5 from './Assets/doctor7.webp'
import doc6 from "./Assets/doctor14.jpg"
import doc7 from './Assets/doctor15.jpg'
import doc8 from './Assets/doctor9.webp'

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
      name: "Dr Sathiyan K MBBS, MDRT",
      role: "Radiation Oncologist & Registar",
      image: doc7,
    },

    
  ];
  const OurTeam = () => {
    useEffect(() => {
        AOS.init({ duration: 3000, once: true });
    }, []);
    return (
    
      <section className="doctors-section">
    <div className="section-title" data-aos="fade-up">    <h2 >Meet Our Doctors</h2></div>
        <div className="doctors-grid">
          {doctors.map((doc, index) => (
            <div className="doctor-card" key={index} data-aos="fade-up" data-aos-delay={index * 200}>
              <div className="image-border">
                <img src={doc.image} alt={doc.name} className="doctor-image" />
              </div>
        <div className="doctor-name">   <h4 >{doc.name}</h4></div>   
        <div>      <p className="doctor-specialty">{doc.role}</p></div>   
            </div>  
          ))}
        </div>
        </section>
        );
        };
    
        export default OurTeam