"use client";
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import './swiper-kits.css';
import { Navigation } from 'swiper/modules';

// import required modules

import KitCard from '../KitCard/KitCard';

export default function SwiperKits() {
  return (
    <>
      <Swiper
        className='swiper-kits'
        modules={[Navigation]}
        navigation
        loop
        spaceBetween={20}
        breakpoints={
          {
            768: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }
        }
      >
        {[1, 2, 3, 4,].map((project, index) => (
          <SwiperSlide key={index} className="">
            <KitCard inSwiper={true} index={index} />
          </SwiperSlide> 
        ))}

      </Swiper>
    </>
  );
}
