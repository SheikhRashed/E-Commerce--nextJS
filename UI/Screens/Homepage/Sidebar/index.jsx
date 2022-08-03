import React from "react"
import Link from "next/link"
import styles from "./sidebar.module.css"

const index = ({ categoryList }) => {
	return (
		<div className={styles.sidebar}>
			{/* heading  */}
			<div>
				<h2 className={styles.heading}>Browse Category</h2>
			</div>
			{/* category item  */}
			<div>
				<ul className={styles.category}>
					{categoryList.map((item, idx) => (
						<li key={idx}>
							<Link href="/">
								<a>{item.title}</a>
							</Link>
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}

export default index
