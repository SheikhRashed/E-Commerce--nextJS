import React from "react"
import Sidebar from "../UI/Screens/Homepage/Sidebar"
import Banner from "../UI/Screens/Homepage/Banner"
import categoryData from "../data/category.json"
import productData from "../data/product.json"
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
		</>
	)
}
