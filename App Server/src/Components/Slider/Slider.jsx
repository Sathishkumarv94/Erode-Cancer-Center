
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import './Slider.css';
import img1 from '../Home/Assets/hos4.webp';
import img2 from '../Home/Assets/hos2.webp';
import img3 from '../Home/Assets/hos1.webp';

function CustomSlider() {
    const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <div className="slider-wrapper">
      
      <button ref={prevRef} className="custom-prev"><FaChevronLeft /></button>
      <button ref={nextRef} className="custom-next"><FaChevronRight /></button>
    
    <Swiper
      spaceBetween={30}
      effect="fade"
      fadeEffect={{ crossFade: true }}
      speed={1500} 
     
      
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      modules={[EffectFade, Navigation, Pagination, Autoplay]}
      onSwiper={(swiper) => {
    
        if (swiper.params.navigation) {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }
      }}
      className="mySwiper"
    >
      <SwiperSlide>
      <div className="hero-slide">
    <img src={img1} alt="Hospital Exterior" />
    <div className="hero-overlay" />
    <div className="hero-textbox">
      <h1>Compassionate Cancer Care</h1>
      <p>Empowering patients with personalized treatments and advanced facilities.</p>
      <Link to="/contact" className="hero-btn">Book Appointment</Link>
    </div>
  </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="hero-slide">
    <img src={img2} alt="Doctor Consultation" />
    <div className="hero-overlay" />
    <div className="hero-textbox">
      <h1>Expert Oncologists at Your Side</h1>
      <p>Meet our experienced team dedicated to every stage of your healing journey.</p>
      <Link to="/our-experts" className="hero-btn">Meet Our Experts</Link>
    </div>
  </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="hero-slide">
    <img src={img3} alt="Hospital Technology" />
    <div className="hero-overlay" />
    <div className="hero-textbox">
      <h1>Precision. Technology. Trust.</h1>
      <p>Cutting-edge diagnostics and therapies in a trusted environment of care.</p>
      <Link to="/blogs" className="hero-btn">Visit Blog</Link>
    </div>
  </div>
      </SwiperSlide>
    </Swiper>
    </div>
  );
}
export default CustomSlider
