import React from "react"
import NestedLayout from "../../UI/Components/Layout/NestedLayout"

export default function CategoryDetailsPage() {
	return <div>Category Details</div>
}

CategoryDetailsPage.getLayout = function getLayout(page) {
	return (
		<NestedLayout>
			{page}
		</NestedLayout>
	)
}