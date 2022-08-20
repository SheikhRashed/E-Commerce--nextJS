import React from "react"
import Link from "next/link"
import { Pagination, Autoplay } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import { Container, Row, Col } from "react-bootstrap"
import categoryData from "../../../../data/category.json"
import SideBar from "../Sidebar/SIdeBar"
import Image from "next/image"
import "swiper/css"
import "swiper/css/pagination"
import styles from "./banner.module.css"

export default function Banner({ bannerImgData, categoryList, showCase }) {
	console.log(showCase)
	return (
		<div className={styles.Banner}>
			<Container>
				<Row>
					<Col lg={3}>
						<div className={styles.sidebar}>
							{/* heading  */}
							<div>
								<h2 className={styles.heading}>Browse Category</h2>
							</div>
							{/* category item  */}
							<div className={styles.categoryWrapper}>
								<ul className={styles.category}>
									{
										categoryList.map((category) => (
											<li key={category._id}>
												<Link href={`/category?name=${category?.title}&id=${category?._id}`}>
													<a className={styles.link}>
														<span>
															<Image src={`https://server.buniyadi.craftedsys.com/api/image/serve/${category.icon._id}?quality=100`} alt="category icon" layout="fill" />
														</span>
														{category.title}
													</a>
												</Link>
											</li>
										))
									}
								</ul>
							</div>
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
									pagination={{ clickable: true, dynamicBullets: true }}
									className="mySwiper"
								>
									{showCase.map((product) => (
										<SwiperSlide key={product._id}>
											<Row className="align-items-center">
												<Col xs={6}>
													<div>
														<h2 className="mb-2">
															{product.title}
														</h2>
														<blockquote>
															<p>
																{product.shortDescription ? product.shortDescription : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis quisquam quas consequuntur, deserunt a, sit error nostrum magnam aliquam odit nemo cum enim fugiat magni harum, consequatur et qui assumenda.'}

															</p>
														</blockquote>
													</div>
												</Col>
												<Col xs={6} >
													<div className={styles.sliderImg}>
														<Image src={`https://server.buniyadi.craftedsys.com/api/image/serve/${product?.image}?quality=100&format=png&fit=contain`} alt={product.title} layout="fill" />
													</div>
												</Col>

											</Row>

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

