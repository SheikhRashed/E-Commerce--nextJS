import React, { useState, useEffect } from "react"
import bannerImages from "../../../data/banner-img.json"
import Banner from "../../Components/Home/Banner/Banner"
import ProductList from "../../Components/ProductList/ProductList"




export default function HomeScreen() {

	const [productList, setProductList] = useState([]);
	const [categoryList, setCategoryList] = useState([]);

	async function fetchProduct() {
		try {
			const response = await fetch("https://server.buniyadi.craftedsys.com/api/product?limit=12&resolvePrimaryCategory=1");

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

	async function fetchCategory() {
		try {
			const response = await fetch("https://server.buniyadi.craftedsys.com/api/category?productCount=1&resolveIcon=1&resolveImage=1");
			if (response.ok) {
				const categoryList = await response.json()
				setCategoryList(categoryList.data)
			}
		} catch (err) {
			console.log(err.message)
		}
	}

	useEffect(() => {
		fetchProduct()
		fetchCategory()
	}, [])


	return (
		<>
			<Banner bannerImgData={bannerImages} categoryList={categoryList} showCase={productList} />
			<ProductList productTitle="Prdouct Lists" productList={productList} />
		</>
	)
}
