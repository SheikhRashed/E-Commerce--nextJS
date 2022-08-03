import Layout from "../UI/Components/Layout"
import styles from "../styles/global.css"
function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	)
}

export default MyApp
