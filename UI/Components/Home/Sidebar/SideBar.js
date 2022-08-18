import React from "react"
import Link from "next/link"
// import { SidebarData } from "./SidebarData"

import styles from "./sidebar.module.css"

const SideBar = ({ categoryList }) => {

	return (
		<div className={styles.sidebar}>
			{/* heading  */}
			<div>
				<h2 className={styles.heading}>Browse Category</h2>
			</div>
			{/* category item  */}
			<div className={styles.categoryWrapper}>
				{/* <ul className={styles.category}>
						{categoryList.map((item, idx) => (
							<li key={idx}>
								<Link href={item.path}>
									<a className={styles.link}>
										<span className={styles.icon}>{item.icon}</span>
										{item.title}
									</a>
								</Link>
							</li>
						))}
					</ul> */}
			</div>
		</div>
	)
}

export default SideBar
