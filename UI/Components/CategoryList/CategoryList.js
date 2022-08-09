import React from "react";

import { Autoplay } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import { Container, Row, Col } from "react-bootstrap"
import ProductCard from "../ProductCard/ProductCard";

import styles from "./CategoryList.module.css"

export default function CategoryList({ productList }) {
  return (
    <div className={styles.latestProduct}>
      <Container>
        <h2 className={styles.heading}>Category Lists</h2>
        <div className="productWrapper">
          <Swiper
            slidesPerView={1}
            spaceBetween={12}
            breakpoints={{
              767: {
                slidesPerView: 2
              },
              991: {
                slidesPerView: 3
              }
            }}
            modules={[Autoplay]}
            autoplay={{
              delay: 1600,
              disableOnInteraction: true,
            }}
            className="mySwiper"
          >
            {
              productList && productList.map((product, idx) => (
                <SwiperSlide key={idx}>
                  <ProductCard product={product} />
                </SwiperSlide>
              ))
            }

          </Swiper>
        </div>
      </Container>
    </div>
  )
}