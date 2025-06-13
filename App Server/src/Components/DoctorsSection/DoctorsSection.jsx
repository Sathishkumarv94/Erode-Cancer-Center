import React from "react";
import "./DoctorsSection.css";
import doc1 from "./Assets/doctor.jpg";
import doc2 from "./Assets/doctor1.jpg";
import doc3 from "./Assets/doctor3.jpg";
import doc7 from './Assets/doctor15.jpg';
import doc13 from './Assets/doctor16.jpg'
import { useEffect } from "react";

const doctorGroups = [
  {
    title: "Radiation Oncology",
    members: [
      { name: "Dr. P. Chellapillai MD.,DMRT.,FICR.,", role: "Chief Radiation Oncologist", image: doc1 },
      { name: "Dr. K. Velavan MD, RT.,", role: "Sr. Radiation Oncologist", image: doc2 },
      { name: "Dr. D. Saravanan MBBS, DNB(RT).,", role: "Radiation Oncologist", image: doc1 },
      { name: "Dr. K. Senthilkumaran MBBS.,DMRT., ", role: "Radiation Oncologist", image: doc1 },
      { name: "Dr. K. Sathiyan MBBS, MDRT.,", role: "Radiation Oncologist", image: doc7 },
     
    ],
  },
  {
    title: "Surgical Oncology",
    members: [
      { name: "Dr. G. Prasanna MBBS.,MS.,DNB.,FEBS.,", role: "Oncologist", image: doc1 },
      { name: "Dr. P. Kathirvel Kumaran MS.,DNB.,Mch.,", role: "Oncologist", image: doc1 },
      { name: "Dr. G.M. Jagadeesan MS.,GenSurg", role: " Oncologist", image: doc1 },
    ],
  },
  {
    title: "Medical Oncologist",
    members: [
      { name: "Dr. R. Vidhya MD(RT).,DNB(RT).,DM.,", role: "", image: doc13 },
      { name: "Dr. N. Karthick MD(RT).,DM.,", role: " Oncologist", image: doc1 },
    ],
  },
  {
    title: "Pain & Palliative Care",
    members: [
      { name: "Dr. O. Kumaresan MBBS.,DA.,", role: "", image: doc1 },
    ],
  },
  {
    title: "Duty Dr & Medical Insurance Officer",
    members: [
      { name: "Dr. G. Mohan MD.,", role: "DD & Insurance Medical Officer", image: doc3 },
    ],
  }
];

const DoctorsSection = () => { 
  useEffect(() => {
    document.title = "Doctors | Erode Cancer Centre";
  }, []);
  return (
    <section className="doctors-section">
      <h2 className="secti-title">Our Medical Experts</h2>
      {doctorGroups.map((group, index) => (
        <div key={index} className="doctor-group">
          <h3 className="group-title">{group.title}</h3>
          <div className="doctors-grid">
            {group.members.map((doc, i) => (
              <div className="doctor-card shutter" key={i}>
                <div className="doctor-image-wrapper">
                  <img src={doc.image} alt={doc.name} className="doctor-image" />
                  <div className="shutter-overlay">
                    <h4>{doc.name}</h4>
                    <p>{doc.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default DoctorsSection;
