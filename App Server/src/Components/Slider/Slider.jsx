
import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import './Slider.css';
import img1 from '../Home/Assets/hos4.jpg';
import img2 from '../Home/Assets/hos5.jpg';
import img3 from '../Home/Assets/hos6.jpg';

function CustomSlider() {
    const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <div className="slider-wrapper">
      {/* Custom buttons */}
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
        // Attach custom navigation buttons *after* Swiper mounts
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
        <img src={img1} alt="Slide 1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img2} alt="Slide 2" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img3} alt="Slide 3" />
      </SwiperSlide>
    </Swiper>
    </div>
  );
}
export default CustomSlider
