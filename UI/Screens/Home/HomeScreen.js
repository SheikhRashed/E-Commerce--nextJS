import React, { useState, useEffect } from "react"
import { Container, Row, Col } from "react-bootstrap"
import categoryData from "../../../data/category.json"
import bannerImages from "../../../data/banner-img.json"

import Banner from "../../Components/Home/Banner/Banner"
import SideBar from "../../Components/Home/Sidebar/SIdeBar"
import styles from "./home.module.css"
import CategoryList from "../../Components/CategoryList/CategoryList"




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
			<Banner bannerImgData={bannerImages} />
			<CategoryList productList={productList} />
		</>
	)
}
