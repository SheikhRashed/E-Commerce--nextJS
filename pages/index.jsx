import React from "react"
import Sidebar from "../UI/Screens/Homepage/Sidebar"
import Banner from "../UI/Screens/Homepage/Banner"
import categoryData from "../data/category.json"
import productData from "../data/product.json"
import latestProduct from "../data/latest-product.json"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper"
import ProductCard from "../UI/Components/ProductCard"

import styles from "./home.module.css"

export default function Home() {
	return (
		<>
			<div className="container">
				<div className={styles.gridWrapper}>
					<div className={styles.sidebar}>
						<Sidebar categoryList={categoryData} />
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
