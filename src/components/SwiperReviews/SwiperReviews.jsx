"use client";
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './swiper-reviews.css';
import { Pagination } from 'swiper/modules';

// import required modules

import ReviewCard from '../ReviewCard/ReviewCard';

export default function SwiperReviews() {
  return (
    <>
      <Swiper
        className='swiper-reviews'
        modules={[Pagination]}
        pagination={{ clickable: true }}
        loop
        spaceBetween={20}
        breakpoints={
          {
            1024: {
              slidesPerView: 2,
            }
          }
        }
      >
        {[1, 2, 3].map((project, index) => (
          <SwiperSlide key={index} className="">
            <ReviewCard />
          </SwiperSlide> 
        ))}

      </Swiper>
    </>
  );
}
