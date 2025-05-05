import React, { useState } from 'react';
import './PeripheralClinics.css';
import clinicImage from './Assets/hospital.png';
import peripheralHeroImage from './Assets/ho2.jpg';
 // Replace with your actual PNG path

 const PeripheralHero = () => {
    return (
      <div className="peripheral-hero">
        <img src={peripheralHeroImage} alt="Peripheral Clinics" className="peripheral-hero-image" />
        <div className="peripheral-hero-overlay">
          
          <p>Extending our care through accessible and connected satellite clinics and partner hospitals.</p>
        </div>
      </div>
    );
  };

const hospitalData = [
  { name: 'ERODE', 
    location: '1/393 Velavan Nagar, ' +
          'Perundurai Road, ' +
          'Thindal, Erode, ' +
          'Tamil Nadu – 638012. India',
     contact: 'Phone : +91 424 2339704,',
     Mobile: ' +91 98428 22443,',
     Email: ' info@erodecancercentre.com,' },
  // { name: 'SALEM', 
  //   location: 'No 370, Roundana, ' +
  //         'Kondalampatti,, ' +
  //         'Salem, Tamil Nadu 636010',
  //    contact: 'Phone : 0427 227 3477,',
  //    Mobile: ' +91 90473 09191,',
  //    Email: ' info@erodecancercentre.com,' },
  { name: 'BANGALORE CANCER CENTRE', 
    location: '118/1-2, Mookambika Temple Road, ' +
          'Machohalli Gate, ' +
          'Magadi Main Road , ' +
          'Bangalore, Karnataka 560091',
     contact: 'Mobile : +91 80500 20821,',
     Mobile: ' +91 99439 99885,',
     Email: ' bengalurucancercentre@gmail.com,' },
];

const clinicData = [
    {
      name: 'Vellore Cancer Centre',
      location: 'No.9, 8th East main Road, ' +
          'Gandhi Nagar, Vellore' +
          'Tamil Nadu – 632006. India',
      contact: 'Mobile: 9659707555',
      Mobile: '+91 98947 71377',
      Email: 'info@erodecancercentre.com',
    },
    {
      name: 'Krishnagiri',
      contact: 'Mobile: +91 90473 09191',
      Mobile : '+91 95668 75990',
      Email: 'info@erodecancercentre.com',
    },
    {
      name: 'Karur Cancer Centre',
      location: 'West Gowripuram,, ' +
          'Opp to Ammayappa Hospital, ' +
          'VSengunthapuram, Karur , ' +
          'Tamil Nadu – 639002. India',
      contact: 'Phone: 98940 44478',
      Mobile: ' +91 96597 07111',
      Email: 'info@erodecancercentre.com',
    },
     {
      name: 'Karur Cancer Centre',
      location: 'West Gowripuram,, ' +
          'Opp to Ammayappa Hospital, ' +
          'VSengunthapuram, Karur , ' +
          'Tamil Nadu – 639002. India',
      contact: 'Phone: 98940 44478',
      Mobile: ' +91 96597 07111',
      Email: 'info@erodecancercentre.com',
    },
  ];
  const visitingData = [
    {
        name: 'Krishnagiri',
        contact: 'Mobile: +91 90473 09191',
        Mobile : '+91 95668 75990',
        Email: 'info@erodecancercentre.com',
    },
    {
        name: 'Dharmapuri',
        contact: 'Phone: +91 90473 09191',
        Mobile: ' +91 95668 75990',
        Email: 'info@erodecancercentre.com',
      },
      {
        name: 'Hosur',
        contact: 'Phone: +91 90473 09191',
        Mobile: ' +91 95668 75990',
        Email: 'info@erodecancercentre.com',
      },
      {
        name: 'Tiruchengode',
        location: 'SVMC HOSPITAL AND RESEARCH INSTITUTE, ' ,
        Mobile: ' +91 96597 07111',
        Email: 'info@erodecancercentre.com',
      },
      {
        name: 'Tiruppur',
        Mobile: ' +91 96597 07111',
        Email: 'info@erodecancercentre.com',
      },
      {
        name: 'Gobichettipalayam',
        Mobile: ' +91 96597 07111',
        Email: 'info@erodecancercentre.com',
      },
      {
        name: 'Tirupathur',
        Mobile: ' +91 90473 09191',
        Email: 'info@erodecancercentre.com',
      },
      {
        name: 'Kaveripattinam',
        Mobile: '+91 90473 09191',
        Email: 'info@erodecancercentre.com',
      },
    
  ];
  const upcomingData = [
    {
      name: 'Nagercoil',
    },
    {
        name: 'Pondicherry',
      },
      {
        name: 'Coimbatore',
      },

  ];
  

const Section = ({ title, data, showContact = true  }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    
    <div className="section-container">
      <h3 className="section-title" onClick={() => setIsOpen(!isOpen)}>
        {title} <span>{isOpen ? '-' : '+'}</span>
      </h3>
      {isOpen && (
        <div className="card-grid">
          {data.map((item, index) => (
            <div className="clinic-card" key={index}>
              <img src={clinicImage} alt="clinic" className="clinic-image" />
              <h4>{item.name}</h4>
              {showContact && (
    <> 
              <h5>{item.location}</h5>
       {item.contact && <p className="contact"><strong>📞</strong> {item.contact}</p>}
              <p><strong>Mobile:</strong> {item.Mobile}</p>
              <p><strong>Email:</strong> {item.Email}</p>
              </>
            )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const PeripheralClinics = () => (
  <div className="peripheral-clinics-container">
     <PeripheralHero />
    <h1 className="page-title">Peripheral Clinics</h1>
    <p className="intro-text">Explore our peripheral clinics, hospitals, and upcoming projects.</p>

    <Section title="Hospitals" data={hospitalData} />
    {/* Repeat for clinics, visiting hospitals, etc. */}
    <Section title="Clinics" data={clinicData} />
    <Section title="Visiting Hospitals" data={visitingData} />
    <Section title="Upcoming Projects" data={upcomingData} showContact={false} />

  </div>
);

export default PeripheralClinics;
