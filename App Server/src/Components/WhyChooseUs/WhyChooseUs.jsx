import React from "react";
import "./WhyChooseUs.css";
import { FaHeartbeat, FaUserMd, FaHospitalAlt, FaStethoscope } from "react-icons/fa";

const features = [
  {
    icon: <FaHeartbeat />,
    title: "Compassionate Care",
    description: "We treat every patient with empathy, respect, and personalized attention.",
    gradient: "linear-gradient(to bottom right, #7f00ff, #e100ff)", // pink gradient
  },
  {
    icon: <FaUserMd />,
    title: "Expert Specialists",
    description: "Our experienced team includes the region’s top doctors and surgeons.",
    gradient: "linear-gradient(to bottom right, #7f00ff, #e100ff)", // purple gradient
  },
  {
    icon: <FaHospitalAlt />,
    title: "Advanced Technology",
    description: "Equipped with the latest medical tech for precise diagnosis and treatment.",
    gradient: "linear-gradient(to bottom right, #7f00ff, #e100ff)", // peach gradient
  },
  {
    icon: <FaStethoscope />,
    title: "24/7 Availability",
    description: "Round-the-clock emergency and care support for all patients.",
    gradient: "linear-gradient(to bottom right, #7f00ff, #e100ff)", // pinkish gradient
  },
];

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us-section">
      <h2 className="section-title">Why Choose Us</h2>
      <p className="section-subtitle">We bring the best in healthcare with passion and dedication.</p>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div
            key={index}
            className="feature-card"
            style={{ background: feature.gradient, color: "#333" }}
          >
            <div className="icon-box">{feature.icon}</div>
            <h4>{feature.title}</h4>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;