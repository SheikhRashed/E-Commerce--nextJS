import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import categoryData from "../../../data/category.json"
import productData from "../../../data/product.json"
import latestProduct from "../../../data/latest-product.json"

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper"
import Banner from "../../Components/Home/Banner/Banner"
import ProductCard from "../../Components/ProductCard/ProductCard"
import SideBar from "../../Components/Home/Sidebar/SIdeBar"
import styles from "./home.module.css"



export default function HomeScreen() {
	return (
		<>
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
								<Banner data={productData} />
							</div>
						</Col>
					</Row>
				</Container>
			</div>

			{/* Latest Product  */}
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
							{latestProduct.map((data, idx) => (
								<SwiperSlide key={idx}>
									<ProductCard data={data} />
								</SwiperSlide>
							))}
						</Swiper>
					</div>
				</Container>
			</div>
		</>
	)
}
