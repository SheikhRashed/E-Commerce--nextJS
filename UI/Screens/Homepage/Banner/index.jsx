import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/pagination"

import { Pagination, Autoplay } from "swiper"

import styles from "./banner.module.css"

const index = ({ data }) => {
	return (
		<div className={styles.bannerSlider}>
			<Swiper
				modules={[Pagination, Autoplay]}
				autoplay={{
					delay: 1200,
					disableOnInteraction: true,
				}}
				pagination={{ clickable: true }}
				className="mySwiper"
			>
				{data.map((item, idx) => (
					<SwiperSlide key={idx}>
						<div className={styles.sliderImg}>
							<img src={item.url} alt="" />
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
}

export default index
