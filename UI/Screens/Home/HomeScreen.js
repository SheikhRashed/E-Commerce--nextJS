import React from "react"
import categoryData from "../../../data/category.json"
import productData from "../../../data/product.json"
import latestProduct from "../../../data/latest-product.json"

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper"

import styles from "./home.module.css"
import Banner from "../../Components/Home/Banner/Banner"
import ProductCard from "../../Components/ProductCard/ProductCard"
import SideBar from "../../Components/Home/Sidebar/SIdeBar"

export default function HomeScreen() {
	return (
		<>
			<div className="container">
				<div className={styles.gridWrapper}>
					<div className={styles.sidebar}>
						<SideBar categoryList={categoryData} />
					</div>
					{/* Banner */}
					<div className={styles.banner}>
						<Banner data={productData} />
					</div>
				</div>
			</div>

			{/* Latest Product  */}
			<div className={styles.latestProduct}>
				<div className="container">
					<h2 className={styles.heading}>Latest Product</h2>
					<div className="productWrapper">
						<Swiper
							slidesPerView={3}
							spaceBetween={30}
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
				</div>
			</div>
		</>
	)
}
