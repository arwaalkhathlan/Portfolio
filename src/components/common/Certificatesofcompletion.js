// src/common/Certificates.js
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Corrected import for Swiper CSS
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import images from '../../utils/importImages'; 

const Certificates = () => {
  return (
    <div>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        scrollbar={{ draggable: true }}
      >
        {Object.keys(images).map((key, index) => (
          <SwiperSlide key={index}>
            <img src={images[key]} alt={`Certificate ${index}`} className="certificate-image" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Certificates;
