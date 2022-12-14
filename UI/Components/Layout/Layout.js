import React, { useState, useEffect } from "react"
import Head from "next/head"
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import styles from "./layout.module.css"

const Layout = ({ children }) => {
	const [productList, setProductList] = useState([]);


	async function fetchProduct() {
		try {
			const response = await fetch("https://server.buniyadi.craftedsys.com/api/product?resolvePrimaryCategory=1&resolveImage=1");

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
			<Head>
				<title>E-Commerce</title>
				<link rel="icon" href="/favicon.ico" />
				<meta name="description" content="Generated by create next app" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0"
				/>
			</Head>

			<Navbar productList={productList} />
			<main className={styles.mainWrapper}>
				{children}
			</main>
			<Footer />
		</>
	)
}

export default Layout
