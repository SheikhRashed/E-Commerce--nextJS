import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/global.css"
import Layout from "../UI/Components/Layout/Layout"


function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	)
}

export default MyApp
