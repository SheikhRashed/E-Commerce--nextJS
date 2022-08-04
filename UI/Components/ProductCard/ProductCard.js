import React from "react"
import Link from "next/link"
import styles from "./ProductCard.module.css"
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai"

const ProductCard = ({ data }) => {
	const { img, offer, category, title, product_brief, price } = data;

	return (
		<div className={styles.productCard}>

			{offer && <div className={styles.badge}>Hot</div>}

			<div className={styles.productTumb}>
				<img src={img} alt="" />
			</div>

			<div className={styles.productDetails}>
				<span className={styles.productCatagory}>{category}</span>
				<h4>
					<Link href="/category-details">
						<a >{title}</a>
					</Link>
				</h4>
				<p>{product_brief}</p>
				<div className={styles.productBottomDetails}>
					<div className={styles.productPrice}>
						<small>$96.00</small>
						{price}
					</div>
					<div className={styles.productLinks}>
						<a href="">
							<AiOutlineHeart />
						</a>
						<a href="">
							<AiOutlineShoppingCart />
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProductCard
