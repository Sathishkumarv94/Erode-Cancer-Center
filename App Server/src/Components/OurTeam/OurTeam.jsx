import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";       
import "slick-carousel/slick/slick-theme.css";
import "./OurTeam.css";


import doc1 from "./Assets/doctor.jpg";
import doc2 from "./Assets/doctor1.jpg";
import doc3 from "./Assets/doctor3.jpg";
import doc7 from './Assets/doctor15.jpg';
import doc13 from './Assets/doctor16.jpg'


const doctors = [
  { name: "Dr. P. Chellapillai MD.,DMRT.,FICR.,", role: "Chief Radiation Oncologist", image: doc1 },
  { name: "Dr. K. Velavan MD, RT.,", role: "Sr. Radiation Oncologist", image: doc2 },
  { name: "Dr. D. Saravanan MBBS, DNB(RT).,", role: "Radiation Oncologist", image: doc1 },
  { name: "Dr. K. Senthilkumaran MBBS.,DMRT., ", role: "Radiation Oncologist", image: doc1 },
  { name: "Dr. K. Sathiyan MBBS, MDRT.,", role: "Radiation Oncologist", image: doc7 },
  { name: "Dr. G. Prasanna MBBS.,MS.,DNB.,FEBS.,", role: "Oncologist", image: doc1 },
  { name: "Dr. P. Kathirvel Kumaran MS.,DNB.,Mch.,", role: "Oncologist", image: doc1 },
  { name: "Dr. G.M. Jagadeesan MS.,GenSurg", role: " Oncologist", image: doc1 },
  { name: "Dr. R. Vidhya MD(RT).,DNB(RT).,DM.,", role: "", image: doc13 },
  { name: "Dr. N. Karthick MD(RT).,DM.,", role: " Oncologist", image: doc1 },
  { name: "Dr. O. Kumaresan MBBS.,DA.,", role: "", image: doc1 },
  { name: "Dr. G. Mohan MD.,", role: "DD & Insurance Medical Officer", image: doc3 },
];


const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 3 } },
    { breakpoint: 768, settings: { slidesToShow: 2 } },
    { breakpoint: 480, settings: { slidesToShow: 1 } },
  ],
};

const OurTeam = () => {
  return (
    <section className="doc-section">
      <h2 className="sect-title">Meet Our Doctors</h2>
      <Slider {...settings}>
        {doctors.map((doc, index) => (
          <div className="doc-card" key={index}>
            <div className="doc-image-container">
              <img src={doc.image} alt={doc.name} className="doc-image" />
              <div className="hover-overlay">
                <h4 className="doc-name">{doc.name}</h4>
                <p className="doc-specialty">{doc.role}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default OurTeam;
