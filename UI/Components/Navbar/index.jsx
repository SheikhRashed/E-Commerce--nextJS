import React from "react"
import Link from "next/link"
import { FaUserCircle } from "react-icons/fa"
import { BsFillCartFill } from "react-icons/bs"
import { FiSearch } from "react-icons/fi"
import styles from "./navbar.module.css"

const index = () => {
	return (
		<header className={styles.header}>
			<div className={`container ${styles.container}`}>
				{/* Brand Name  */}
				<div className={styles.logo}>
					<h2>
						<Link href="/">
							<a>E-Commerce</a>
						</Link>
					</h2>
				</div>
				{/* Search Field  */}
				<form>
					<div className={styles.searchField}>
						<input type="text" placeholder="Search Item..." />
						<button>
							<FiSearch className={styles.iconStyle} />
						</button>
					</div>
				</form>
				{/* Actions Content  */}
				<ul className={styles.actions}>
					<li>
						<Link href="/">
							<a>
								<FaUserCircle />
							</a>
						</Link>
					</li>
					<li>
						<Link href="/">
							<a>
								<BsFillCartFill />
							</a>
						</Link>
					</li>
				</ul>
			</div>
		</header>
	)
}

export default index
