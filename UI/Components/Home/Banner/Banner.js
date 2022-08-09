import React from "react"
import { Pagination, Autoplay } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import { Container, Row, Col } from "react-bootstrap"
import categoryData from "../../../../data/category.json"
import SideBar from "../Sidebar/SIdeBar"
import Image from "next/image"
import "swiper/css"
import "swiper/css/pagination"
import styles from "./banner.module.css"

export default function Banner({ bannerImgData }) {
	return (

		<div className={styles.Banner}>
			<Container>
				<Row>
					<Col lg={3}>
						<div className={styles.sidebar}>
							<SideBar categoryList={categoryData} />
						</div>
					</Col>
					<Col lg={9}>
						<div className={styles.banner}>
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
									{bannerImgData.map((item, idx) => (
										<SwiperSlide key={idx}>
											<div className={styles.sliderImg}>
												{/* <img src={item.url} alt="" /> */}

												<Image src={item.src} alt="demo-banner-img" layout="fill" />

											</div>
										</SwiperSlide>
									))}
								</Swiper>
							</div>
						</div>
					</Col>
				</Row>
			</Container>
		</div>


	)
}

