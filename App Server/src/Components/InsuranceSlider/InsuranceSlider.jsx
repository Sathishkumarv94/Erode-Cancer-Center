import React from "react";
import Slider from "react-slick";
import "./InsuranceSlider.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import logo1 from "./Assets/bupa250.webp";
import logo2 from "./Assets/cola250.webp";
import logo3 from "./Assets/liberty250.webp";
import logo4 from "./Assets/magma250.webp";
import logo5 from "./Assets/national250-1.webp";
import logo6 from "./Assets/newindia250.webp";
import logo7 from "./Assets/oriental250.webp";
import logo8 from "./Assets/TATA250-1.webp";
import logo9 from "./Assets/united250.webp";

const insuranceLogos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9];

const InsuranceSlider = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000, 
          once: false,     
        });
      }, []);
  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    autoplay: true,
    autoplaySpeed: 1500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="insurance-section" data-aos="slide-up">
      <h2 className="insurance-title">Our Insurance Partners</h2>
      <Slider {...settings} className="insurance-slider">
        {insuranceLogos.map((logo, index) => (
          <div key={index} className="insurance-slide"  data-aos="flip-left"
          data-aos-delay={index * 100}>
            <img src={logo} alt={`Insurance ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default InsuranceSlider;
