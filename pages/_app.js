import "../styles/global.css"
import Layout from "../UI/Components/Layout/Layout"
function MyApp({ Component, pageProps }) {

	const getLayout = Component.getLayout || ((page) => page)

	return (
		getLayout(<Component {...pageProps} />)
	)
}

export default MyApp
