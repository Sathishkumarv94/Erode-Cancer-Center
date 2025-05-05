import React, { useState } from "react";
import "./Accordion.css";
import { FaHeartbeat, FaEye, FaHandsHelping, FaStethoscope } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import doctorImg from "./Assets/hos3.jpg"; // Replace with your image path

const faqs = [
  {
    icon: <FaHeartbeat />,
    title: "Our Mission",
    content:
      "We provide compassionate, high-quality, and affordable healthcare to improve the lives of those we serve.",
  },
  {
    icon: <FaEye />,
    title: "Our Vision",
    content:
      "To be a leading center of excellence in patient care, medical innovation, and community well-being.",
  },
  {
    icon: <FaHandsHelping />,
    title: "Patient-Centered Approach",
    content:
      "Our patients are at the heart of everything we do, from diagnosis to recovery — with comfort and care.",
  },
  {
    icon: <FaStethoscope />,
    title: "Commitment to Quality",
    content:
      "Our team pursues clinical excellence through advanced practices, ongoing training, and deep compassion.",
  },
];

const AnimatedAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="accordion-section">
      <div className="accordion-heading">
        <h2 className="section-title">Our Promise to You</h2>
        <p className="section-subtitle">
          Built on compassion, technology, and trust – here’s what drives us forward.
        </p>
      </div>

      <div className="accordion-image-layout">
        {/* Left Side Image */}
        <div className="image-column">
          <img src={doctorImg} alt="Our Team" />
        </div>

        {/* Right Side Accordion */}
        <div className="accordion-column">
          {faqs.map((item, index) => (
            <div
              key={index}
              className={`accordion-item ${activeIndex === index ? "active" : ""}`}
              onClick={() => toggle(index)}
            >
              <div className="accordion-header">
                <span className="accordion-icon">{item.icon}</span>
                <h4>{item.title}</h4>
              </div>
              <AnimatePresence initial={false}>
                {activeIndex === index && (
                  <motion.div
                    className="accordion-body"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p>{item.content}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnimatedAccordion;
