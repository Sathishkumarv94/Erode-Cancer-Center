import React from "react";
import "./VirtualTour.css";
import { useNavigate } from "react-router-dom";
import tourImage1 from "./Assets/fac3.jpeg";
import tourImage2 from "./Assets/fac7.webp";
import tourImage3 from "./Assets/fac6.webp";
import tourImage4 from "./Assets/fac8.webp";  // New Image for the second grid
import tourImage5 from "./Assets/fac4.webp";  // New Image for the second grid
import tourImage6 from "./Assets/fac9.webp";  // New Image for the second grid
import { motion } from "framer-motion";

const highlights = [
  {
    title: "State-of-the-Art Operation Theatre",
    description: "Equipped with advanced surgical tech for precision and safety.",
    image: tourImage1,
    path: "/facilities/operationtheatre",
  },
  {
    title: "Modern Radiology Suite",
    description: "High-resolution MRI, CT scan, and digital X-ray imaging.",
    image: tourImage2,
    path: "/facilities/radiology-suite",
  },
  {
    title: "Comfortable Patient Rooms",
    description: "Designed to feel like home, with natural lighting and hygiene.",
    image: tourImage3,
    path: "/facilities/patient-rooms",
  },

  {
    title: "Advanced ICU Units",
    description: "Highly equipped ICUs for critical care and patient recovery.",
    image: tourImage4,
    path: "/facilities/icu",
  },
  {
    title: "Lab",
    description: "State-of-the-art laboratory for accurate diagnostic testing.",
    image: tourImage5,
    path: "/facilities/laboratory" ,
  },
  {
    title: "Treatments",
    description: "Comprehensive treatments tailored to each patient's needs.",
    image: tourImage6,
    path: "/facilities/treatments",
  },
];

const VirtualTour = () => {
  const navigate = useNavigate();
    return (
        <div className="virtual-tour-section">
       <div className="section-title">   <h2 >Virtual Tour & Facility Highlights</h2></div>
          <div className="tour-gallery">
            {highlights.map((item, index) => (
              <motion.div
                className="tour-item"
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                onClick={() => navigate(item.path)}
                style={{ cursor: "pointer" }}
              >
                <div className="tour-image-container">
                  <img src={item.image} alt={item.title} />
                  <div className="overlay">
                    <h3 className="overlay-title">{item.title}</h3>
                    <p className="overlay-description">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      );
};

export default VirtualTour;
