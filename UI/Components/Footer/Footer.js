import React from "react"
import styles from "./footer.module.css"

export default function Footer(){
	return (
		<footer className={styles.footer}>
			<div className="container">
				<h2 className={styles.copyright}>
					All Copyright reserved by &copy; E-Commerce.
				</h2>
			</div>
		</footer>
	)
}
