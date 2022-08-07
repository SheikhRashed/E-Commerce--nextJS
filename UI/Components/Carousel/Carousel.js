import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import styles from "./carousel.module.css"

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";

export default function Carousel({ data }) {
  console.log(data)
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <div className="productSlider">
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
          }}

          spaceBetween={24}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper2"
        >
          {
            data.map((item, idx) => (
              <SwiperSlide key={idx}>
                <img src={item.src} />
              </SwiperSlide>
            ))
          }
        </Swiper>
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={6}
          slidesPerView={2}
          breakpoints={{
            575: {
              slidesPerView: 3,
              spaceBetween: 12
            },
            768: {
              slidesPerView: 5,
            },
          }}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper"
        >

          {
            data.map((item, idx) => (
              <SwiperSlide key={idx}>
                <img src={item.src} />
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
    </>
  );
}
