import React from "react"
import NestedLayout from "../../UI/Components/Layout/NestedLayout"
import CategoryDetailsScreen from "../../UI/Screens/CategoryDetails/CategoryDetailsScreen"

export default function CategoryDetailsPage() {
	return <CategoryDetailsScreen />
}

CategoryDetailsPage.getLayout = function getLayout(page) {
	return (
		<NestedLayout>
			{page}
		</NestedLayout>
	)
}