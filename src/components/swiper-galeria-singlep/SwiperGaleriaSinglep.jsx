"use client";
import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./styles.css";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

export default function SwiperGaleriaSinglep({ arregloImagenes }) {
  const [thumbsSwiperMovil, setThumbsSwiperMovil] = useState(null);
  const [thumbsSwiperDesktop, setThumbsSwiperDesktop] = useState(null);

  return (
    <>
      <div className="swiperDynamicMovil lg:hidden sticky top-14">
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          spaceBetween={10}
          thumbs={{ swiper: thumbsSwiperMovil }}
          modules={[FreeMode, Thumbs]}
          className="swiperImagenPrincipal"
          pagination={true}
          // loop={true}
        >
          {arregloImagenes.map((imagen, index) => (
            <SwiperSlide key={index}>
              {/* <img src={imagen}
                className="w-full h-full rounded-[23px]"
              /> */}

              <div className="bg-[#D9D9D9] w-full h-auto aspect-square" />
              
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Thumbs */}
        <div className="divThumbs">
          <Swiper
            onSwiper={setThumbsSwiperMovil}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            navigation={true}
            className="swiperThumbs"
            // loop={true}
          >
            {arregloImagenes.map((imagen, index) => (
              <SwiperSlide key={index}>
                <button className="w-full">
                  {/* <Image
                    src={imagen}
                    className="w-full h-auto mx-auto rounded-[8px] "
                    alt="imagen thumb producto"
                  /> */}
                  
                  <div className="bg-[#D9D9D9] w-full h-auto aspect-square" />

                </button>
              </SwiperSlide>
          ))}
          </Swiper>
        </div>
      </div>

      <div className="swiperDynamicDesktop hidden lg:flex gap-[10px] sticky top-[10px]">
        {/* Thumbs */}
        {arregloImagenes.length > 0 ? (
          <Swiper
            onSwiper={setThumbsSwiperDesktop}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="swiperThumbs"
            direction="vertical"
            navigation={true}
            autoHeight={true}
            spaceBetween={10}
            // loop={true}
          >
            {arregloImagenes.map((imagen, index) => (
              <SwiperSlide key={index} className="w-full">
                  {/* <Image
                    alt="imagen thumb producto"
                    src={imagen}
                    className="w-full h-auto mx-auto rounded-[8px]"
                  /> */}
                  <button className="w-full h-full">
                    <div className="bg-[#D9D9D9] w-full h-full aspect-square" />
                  </button>

              </SwiperSlide>
            ))}
          </Swiper>

        ) : (
          <div className="flex flex-col gap-2">
            {Array.from({ length: 4 }, (_, index) => index).map((_, index) => (
              <div key={index} className="w-[123px] rounded-md h-auto aspect-square skeleton overflow-hidden relative cursor-pointer hover:opacity-[0.8] transition-all hover:scale-105"></div>
            ))}
          </div>
        )}

        {arregloImagenes.length > 0 ? (
          <Swiper
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
            spaceBetween={10}
            thumbs={{ swiper: thumbsSwiperDesktop }}
            modules={[FreeMode, Thumbs]}
            className="swiperImagenPrincipal"
            pagination={true}
            autoHeight={true}
            // loop={true}
          >
            {arregloImagenes.map((imagen, index) => (
              <SwiperSlide key={index}>
                {/* <ImgComp
                  srcDesk={imagen}
                  srcMob={imagen}
                  alt="imagen principal producto"
                  styles={`w-full h-full aspect-square`}
                  imgStyles={`w-full h-full rounded-[10px] overflow-hidden`}
                /> */}
                  <div className="bg-[#D9D9D9] w-full h-auto aspect-square" />

              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
        ''
        )}
      </div>
    </>
  );
}
