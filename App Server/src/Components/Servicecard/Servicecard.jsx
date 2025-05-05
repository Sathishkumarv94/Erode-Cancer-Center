import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './ServiceCards.css';
import Lottie from 'lottie-react';

// Lottie animation imports
import sympol from './Assets/sympol.json';
import sympol2 from './Assets/sympol2.json';
import sympol3 from './Assets/sympol3.json';
import sympol4 from './Assets/sympol4.json';
import sympol6 from './Assets/sympol6.json';
import sympol7 from './Assets/sympol7.json';
import sympol9 from './Assets/sympol9.json';

const services = [
  {
    title: 'Cancer Screening',
    description: 'Comprehensive programs for early detection of cancer.',
    icon: sympol9,
    path: '/Cancer Screening'
  },
  {
    title: 'Early Cancer Detection',
    description: 'Innovative tests and diagnostics for early signs.',
    icon: sympol4,
    path: '/Early Cancer Detection'
  },
  {
    title: 'Surgical Oncology',
    description: 'Advanced surgical procedures for tumor removal.',
    icon: sympol7,
    path: '/Surgical Oncology'
  },
  {
    title: 'Medical Oncology',
    description: 'Targeted therapies and chemotherapy treatment.',
    icon: sympol,
    path: '/Medical Oncology'
  },
  {
    title: 'Radiation Oncology-IMRT',
    description: 'Precise radiation technology for effective treatment.',
    icon: sympol2,
    path: '/Radiation Oncology'
  },
  {
    title: 'H D R Brachytherapy',
    description: 'Internal radiation therapy with high-dose rates.',
    icon: sympol6,
    path: '/H D R Brachytherapy'
  },
  {
    title: 'Pain & Palliative Care',
    description: 'Relieving pain and improving quality of life.',
    icon: sympol3,
    path: '/Pain & Palliative Care'
  }
];

function ServiceCards() {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className="service-section">
   <div className="section-title" data-aos="fade-right"><h2 >Our Services</h2></div>
    <div className="section-subtitle" data-aos="fade-left">  <p >Comprehensive care with a focus on patient well-being.</p></div>
      <div className="service-cards-grid">
        {services.map((service, index) => (
          <div key={index} className="card-gradient" data-aos="fade-up">
            <div className="icon-glass">
              <Lottie animationData={service.icon} loop={true} style={{ width: 60, height: 60 }} />
            </div>
            <h4>{service.title}</h4>
            <p>{service.description}</p>
            <button 
              className="learn-more-btn"
              onClick={() => handleNavigate(service.path)}
            >
              Learn More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServiceCards;
