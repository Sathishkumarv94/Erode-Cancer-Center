import React from 'react';
import './MD.css'
import img from './Assets/doctor1.jpg' 
import { useEffect } from 'react';

function MDChairman() {
  useEffect(() => {
    document.title = "Chairman | Erode Cancer Centre";
  }, []);
  return (
    <div className="md-chairman-container">
    <div className="md-chairman-banner">
      <h1>Message from the Managing Director & Chairman</h1>
    </div>
    <div className="md-chairman-content">
      <img src={img} className="md-chairman-image" />
      <div className="md-chairman-text">
        <h1>Dr. K. Velavan, MBBS, MDRT</h1>
        <p>As the Managing Director and Consultant Radiation Oncologist of this esteemed institution, I am deeply honored to lead a center that is dedicated to providing advanced, compassionate, and comprehensive cancer care. With over two decades of experience in radiation oncology and chemotherapy, I have witnessed firsthand the transformative impact of state-of-the-art treatments combined with a patient-centered approach.</p>
        <p>Erode Cancer Centre Salem Unit was founded with a vision to bridge the gap in high-quality cancer care, making it accessible to individuals across regions. Our core mission is to bring cutting-edge therapies, such as radiotherapy, medical oncology, and surgical oncology, under one roof while maintaining a steadfast commitment to patient dignity, comfort, and outcomes. At the heart of our endeavors lies the belief that every individual battling cancer deserves not only the best medical treatment but also holistic support to enhance their quality of life.</p>
      </div>
      <div className='md-chairman-text2'>
        <p>Throughout my career, I have strived to integrate clinical excellence with innovation. My academic journey, starting from Madras Medical College, Chennai, laid a solid foundation, enabling me to contribute to the field of oncology through research, teaching, and clinical practice. Over the years, I’ve had the privilege of presenting numerous research papers and representing India at prestigious international oncology conferences. These experiences have enriched my perspective, ensuring that Erode Cancer Centre Salem Unit remains aligned with global standards in cancer care.</p>
        <p>Our dedicated team of oncologists, nurses, and support staff shares a singular vision – to fight cancer with knowledge, skill, and compassion. At Erode Cancer Centre Salem Unit, we are continuously updating our technology and protocols to ensure precision in diagnosis, advanced treatment modalities, and seamless patient recovery. From offering cutting-edge linear accelerators for radiation therapy to providing comprehensive pain and palliative care, our approach is multidisciplinary, collaborative, and forward-thinking.</p>
        <p>In addition to delivering exceptional care, we are actively involved in research and clinical trials to pioneer new methodologies in cancer treatment. Our efforts aim to not only improve survival rates but also enhance the overall well-being of patients during and after their treatment journey.</p>
        <p>As we move forward, I am committed to expanding the horizons of Erode Cancer Centre Salem Unit, fostering partnerships, and nurturing talent that will contribute to the future of oncology. Together, with the unwavering trust of our patients and the relentless dedication of our team, we aim to redefine cancer care in India and beyond.</p>
        <p>Thank you for entrusting your care to us. We stand by you at every step, dedicated to providing hope, healing, and empowerment.</p>
      </div>
    </div>
  </div>
  );
}

export default MDChairman;