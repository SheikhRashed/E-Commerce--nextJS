import React, { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import { Container, Row, Col, Modal } from "react-bootstrap"
import { BiUserCircle } from "react-icons/bi"
import { AiOutlineShoppingCart } from "react-icons/ai"
import { BsSearch } from "react-icons/bs"
import styles from "./navbar.module.css"
import { NavbarData } from "./NavbarData"
// import SearchField from "../SearchField/SearchField"

export default function Navbar() {
	const router = useRouter()
	const [show, setShow] = useState(false)
	const modalHandler = () => setShow(!show)

	return (
		<>
			<header className={styles.header}>
				<Container className="d-flex justify-content-between">
					{/* Brand Name  */}
					<div className={styles.logo}>
						<h2>
							<Link href="/">
								<a>E-Commerce</a>
							</Link>
						</h2>
					</div>

					{/* Navigation Menu */}
					<ul className={styles.navMenu}>

						{
							NavbarData.map((item, idx) => (
								<li key={idx}>
									<Link href={item.path} >
										<a className={router.pathname === item.path ? `${styles.active}` : ""}>{item.title}</a>
									</Link>
								</li>
							))
						}

					</ul>

					{/* Actions Content  */}
					<ul className={styles.actions}>
						<li>
							<button className={styles.searchIcon}>
								<BsSearch />
							</button>
						</li>
						<li>
							<Link href="/">
								<a>
									<BiUserCircle />
								</a>
							</Link>
						</li>
						<li>
							<Link href="/">
								<a>
									<AiOutlineShoppingCart />
								</a>
							</Link>
						</li>
					</ul>
				</Container>
			</header>

			{/* <SearchField status={show} handler={modalHandler} /> */}
		</>
	)
}	