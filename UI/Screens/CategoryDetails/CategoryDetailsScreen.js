import React, { useState } from 'react'

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import Carousel from "../../Components/Carousel/Carousel";
import productData from "../../../data/products.json"
import latestProduct from "../../../data/latest-product.json"


import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai"
import { FaShoppingBag } from "react-icons/fa"
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from "react-icons/md"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper"

import ProductCard from "../../Components/ProductCard/ProductCard";
import styles from "./detailsscreen.module.css"


export default function CategoryDetailsScreen() {
  const [counter, setCounter] = useState(0);
  const [wishList, setWishList] = useState(false);
  const [cart, setCart] = useState(false)

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
    <>

      {/* Category Details   */}
      <div className={styles.categoryDetails}>
        {/* Product Slider */}
        <div className={styles.productSlider}>
          <Carousel data={productData} />
        </div>

        <div className={styles.productInfo}>
          {/* Name */}
          <h2>Men Black Sports Shoes</h2>

          {/* Product price */}
          <p className={styles.price}>
            <del>$1,999.00 </del> &nbsp; $1,699.00
          </p>

          {/* description  */}
          <blockquote>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda, modi est provident alias id eaque facilis et necessitatibus a ex veniam repellendus voluptatibus recusandae consequuntur nihil sit dolores in. Beatae. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima exercitationem debitis illum.
            </p>
          </blockquote>

          {/* product tags  */}
          <ul className={styles.productTags}>
            <li>
              <p>
                sku: <span>654613612</span>
              </p>
            </li>
            <li>
              <p>
                category: <span>Watch</span>
              </p>
            </li>
            <li>
              <p>
                Tags: <span> Clothes, Fashion</span>
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
      </div>

      {/* Latest Product  */}
      <div>
        <div className="container">
          <h2 className={styles.heading}>Latest Product</h2>
          <div className="productWrapper">
            <Swiper
              slidesPerView={2}
              spaceBetween={24}
              modules={[Autoplay]}
              autoplay={{
                delay: 1600,
                disableOnInteraction: true,
              }}
              className="mySwiper"
            >
              {latestProduct.map((data, idx) => (
                <SwiperSlide key={idx}>
                  <ProductCard data={data} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>


    </>
  )
}