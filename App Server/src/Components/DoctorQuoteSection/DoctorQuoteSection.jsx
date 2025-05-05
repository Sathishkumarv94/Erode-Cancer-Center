import React, { useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./DoctorQuoteSection.css";
import doctorQuoteBg from "./Assets/doc4.jpg"; // Use your uploaded image path

const DoctorQuoteSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
}, []);
  return (
    <section className="sec-five" data-aos="fade-down">
      <div className="five-head">
        <img src={doctorQuoteBg} alt="Doctor with patient" />
        <div className="quote-box">
        <div className="overlay-text"> <h3>
            "You cannot save the world, but you can save the man right in front of you.
            God cannot come for us all the time, that is why he sent doctors for us.”
          </h3></div> 
        </div>
      </div>
    </section>
  );
};

export default DoctorQuoteSection;
