import React from "react";
import "../HealthArticle/HealthTipArticle.css";
import PatientStats from "../PatientStats/PatientStats";
import exampleImage1 from "./Assets/img4.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const article = {
  title: "Early Signs of Cancer You Shouldn’t Ignore",
  content: [
    "Unexplained weight loss that occurs rapidly and without changes in diet or activity levels.",
    "Changes in the skin or appearance of moles that evolve over time.",
    "Chronic cough or difficulty breathing that does not resolve with standard treatment.",
    "Consulting a healthcare provider early can make all the difference. Stay aware, stay safe."
  ],
  image: exampleImage1,
};

const HealthTips = () => {
    useEffect(() => {
        AOS.init({ duration: 300, once: false });
      }, []);
  return (
    <div className="health-tips-wrapper">
      <PatientStats></PatientStats>
      <div className="article-container">
        <div className="article-image" data-aos="fade-right">
          <img src={article.image} alt={article.title} />
        </div>
        <div className="article-text" data-aos="fade-left">
          <h3>{article.title}</h3>
          <ul className="article-list">
            {article.content.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
      
    </div>
  );
};

export default HealthTips;
