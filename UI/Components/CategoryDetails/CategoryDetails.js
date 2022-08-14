import React, { useState } from "react"
import productData from "../../../data/products.json"
import Carousel from "../Carousel/Carousel"
import { FaShoppingBag } from "react-icons/fa"
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai"
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from "react-icons/md"

import styles from "./CategoryDetails.module.css"
import { Col, Container, Row } from "react-bootstrap"

export default function CategoryDetails({ productDetail }) {

  // f  console.log(productDetail.category)

  const [counter, setCounter] = useState(0);
  const [cart, setCart] = useState(false)
  const [wishList, setWishList] = useState(false);
  const addWishList = () => setWishList(!wishList)
  const addCart = () => setCart(!cart)


  //increase counter
  const increase = () => {
    setCounter(count => count + 1);
  };

  //decrease counter
  const decrease = () => {
    setCounter(count => count - 1);
  };


  return (
    <div className={styles.categoryDetails}>
      <Container>
        <Row>
          <Col lg={6}>
            <div className={styles.productSlider}>
              <Carousel data={productData} />
            </div>
          </Col>
          <Col lg={6}>
            <div className={styles.productInfo}>
              <h2>{productDetail.title}</h2>
              <p className={styles.price}>
                <del>$1,999.00 </del> &nbsp; $1,699.00
              </p>
              <blockquote>
                <p>
                  {productDetail.shortDescription}
                </p>
              </blockquote>
              <ul className={styles.productTags}>
                <li>
                  <p>
                    category: <span>
                      {productDetail?.category && productDetail?.category[0]?.title}
                    </span>
                  </p>
                </li>
                <li>
                  <p>
                    Tags: <span>
                      {
                        productDetail?.tag && productDetail?.tag.map(item => item.title).join(", ")
                      }
                    </span>
                  </p>
                </li>
              </ul>

              {/* product Counter */}
              <div className={styles.productActions}>
                <div className={styles.productCounter}>
                  <div className={styles.counterWrapper}>
                    <button className="control__btn" onClick={decrease}>
                      <AiOutlineMinus />
                    </button>
                    <p>
                      {counter}
                    </p>
                    <button className="control__btn" onClick={increase}>
                      <AiOutlinePlus />
                    </button>
                  </div>
                  <button className={styles.cartButton} onClick={addCart}>
                    <FaShoppingBag /> &nbsp;
                    {cart ? "Added" : "Add to cart"}
                  </button>
                </div>

                <div className={styles.productWishList}>
                  <button onClick={addWishList}>
                    {wishList ? <>
                      <MdOutlineFavorite />
                      Browse Wishlist
                    </> : <>
                      <MdOutlineFavoriteBorder />
                      Add To Wishlist
                    </>}
                  </button>
                </div>
              </div>

            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}