import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/global.css"


function MyApp({ Component, pageProps }) {
	const getLayout = Component.getLayout || ((page) => page)
	return (
		getLayout(<Component {...pageProps} />)
	)
}

export default MyApp
