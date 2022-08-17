import React, { useState, useEffect } from "react"
import bannerImages from "../../../data/banner-img.json"
import Banner from "../../Components/Home/Banner/Banner"
import ProductList from "../../Components/ProductList/ProductList"




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
			<ProductList productTitle="Prdouct Lists" productList={productList} />
		</>
	)
}
