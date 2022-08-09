import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import categoryData from "../../../data/category.json"
import productData from "../../../data/product.json"

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper"
import Banner from "../../Components/Home/Banner/Banner"
import ProductCard from "../../Components/ProductCard/ProductCard"
import SideBar from "../../Components/Home/Sidebar/SIdeBar"
import styles from "./home.module.css"
import { useState } from "react"
import { useEffect } from "react"



export default function HomeScreen() {

	const [productList, setProductList] = useState([]);

	async function fetchProduct() {
		try {

			const response = await fetch("https://server.buniyadi.craftedsys.com/api/product?limit=6&resolvePrimaryCategory=1");

			if (response.ok) {
				const jsonResponse = await response.json();
				setProductList(jsonResponse.data)
			} else {
				console.log("error status: " + response.status)
			}
		} catch (err) {
			console.log(err.message)
		}
	}

	useEffect(() => {
		fetchProduct()
	}, [])


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
							{productList.map((product, idx) => (
								<SwiperSlide key={idx}>
									<ProductCard product={product} />
								</SwiperSlide>
							))}
						</Swiper>
					</div>
				</Container>
			</div>
		</>
	)
}
