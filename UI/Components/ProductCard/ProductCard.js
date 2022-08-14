import React from "react"
import Link from "next/link"
import styles from "./ProductCard.module.css"
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai"
import Image from "next/image"

const ProductCard = ({ product }) => {


	const defaultVariation = product && product.variation && product.variation.length ?
		product.variation[0]
		: {}

	return (
		<div className={styles.productCard}>

			{/* {offer && <div className={styles.badge}>Hot</div>} */}

			<div className={styles.productTumb}>
				<Image src={`https://server.buniyadi.craftedsys.com/api/image/serve/${product.cover}?height=400&bg=fafafa`} alt={product.title} layout="fill" />
			</div>

			<div className={styles.productDetails}>
				<span className={styles.productCatagory}>{product?.primaryCategory?.title}</span>
				<h4>
					<Link href={"/category-details/?id=" + product._id}>
						<a >{product.title}</a>
					</Link>
				</h4>
				<p>{product.shortDescription}</p>
				<div className={styles.productBottomDetails}>
					<div className={styles.productPrice}>
						{defaultVariation.price?.offer &&
							<small>BDT {defaultVariation.price?.regular}</small>
						}
						BDT {defaultVariation.price?.offer || defaultVariation.price?.regular}
					</div>
					<div className={styles.productLinks}>
						<a href="#">
							<AiOutlineHeart />
						</a>
						<a href="#">
							<AiOutlineShoppingCart />
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProductCard
