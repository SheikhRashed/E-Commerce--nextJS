import Layout from "../UI/Components/Layout/Layout";
import NestedLayout from "../UI/Components/Layout/NestedLayout";
import HomeScreen from "../UI/Screens/Home/HomeScreen";


export default function HomePage() {
	return <HomeScreen />
}

HomePage.getLayout = function getLayout(page) {
	return (
		<Layout>
			{page}
		</Layout>
	)
}