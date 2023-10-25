// import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";
import { useState } from "react";
import Card from "../ui/Card";

export default function Swipers({children,perView,center}) {
  const [swiperRef, setSwiperRef] = useState(null);
  return (
    <>
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={perView}
        centeredSlides={center}
        spaceBetween={10}
        navigation={true}
        modules={[Pagination, Navigation]}
        initialSlide={1}
        breakpoints={{
          100: {
            slidesPerView: 1,
          },
          770: {
            slidesPerView: perView,
          },
        }}
        className="mySwiper"
      >
       {children}
      </Swiper>
    </>
  );
}
