import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import img1 from '../../assets/Images/banner/parts1.png'

// import "./styles.css";

import { Autoplay, Pagination, Navigation } from "swiper";

export default function Banner() {
  return (
    <div className="h-screen w-full">
      <Swiper
        // spaceBetween={30}
        // centeredSlides={true}
        // autoplay={{
        //   delay: 5500,
        //   disableOnInteraction: false,
        // }}
        pagination={{
          clickable: true,
        }}
        // direction={"vertical"}

        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
                 
        <SwiperSlide><img className="h-auto"  src={img1} alt="" /></SwiperSlide>
        <SwiperSlide><img className="h-auto" src={img1} alt="" /></SwiperSlide>
        <SwiperSlide><img className="h-auto" src={img1} alt="" /></SwiperSlide>
        <SwiperSlide><img className="h-auto" src={img1} alt="" /></SwiperSlide>
        <SwiperSlide><img className="h-auto" src={img1} alt="" /></SwiperSlide>
        <SwiperSlide><img className="h-auto" src={img1} alt="" /></SwiperSlide>
        <SwiperSlide><img className="h-auto" src={img1} alt="" /></SwiperSlide>
        <SwiperSlide><img className="h-auto" src={img1} alt="" /></SwiperSlide>
      </Swiper>
    </div>
  );
}