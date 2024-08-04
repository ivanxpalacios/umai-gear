"use client";
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import './swiper-productos.css';
import { Navigation } from 'swiper/modules';

// import required modules

import ProductCard from '../ProductCard/ProductCard';

export default function SwiperProductos() {
  return (
    <>
      <Swiper
        className='swiper-productos'
        modules={[Navigation]}
        navigation
        // loop
        spaceBetween={20}
        breakpoints={
          {
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1440: {
              slidesPerView: 4,
              spaceBetween: 30,
            }
          }
        }
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((project, index) => (
          <SwiperSlide key={index}>
            <div className='flex justify-center'>
              <ProductCard />
            </div>
          </SwiperSlide> 
        ))}

      </Swiper>
    </>
  );
}
