import React from "react";
// import productData from " ../../../data/latest-product.json"
import productData from "../../../data/latest-product.json"
import ProductCard from "../../Components/ProductCard/ProductCard";

import styles from "./category.module.css"
export default function CategoryScreen() {
  return (
    <>
      {/* Products List */}
      <div className={styles.productList}>
        <div className="container">
          <div className={styles.productContent}>
            {
              productData.map((data, idx) => (
                <div key={idx}>
                  <ProductCard data={data} />
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
}