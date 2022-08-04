import React from "react"
import NestedLayout from "../../UI/Components/Layout/NestedLayout"
import CategoryScreen from "../../UI/Screens/Category/CategoryScreen"
import styles from "./category.module.css"


export default function CategoryPage() {
	return <CategoryScreen />
}


CategoryPage.getLayout = function getLayout(page) {
	return (
		<NestedLayout>
			{page}
		</NestedLayout>
	)
}