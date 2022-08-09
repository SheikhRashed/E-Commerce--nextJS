import React, { useState, useEffect } from "react";

import { Container, Row, Col } from "react-bootstrap";
import sortData from "../../../data/sort-data.json"
import ProductCard from "../../Components/ProductCard/ProductCard";
import Filter from "../../Components/Filter/Filter";

import styles from "./category.module.css"



export default function CategoryScreen() {

  const [productList, setProductList] = useState([])

  async function fetchProduct() {
    try {
      const response = await fetch("https://server.buniyadi.craftedsys.com/api/product?limit=16&resolvePrimaryCategory=1");

      if (response.ok) {
        const jsonResponse = await response.json()
        setProductList(jsonResponse.data)
      }
    } catch (err) {
      console.log(err.message)
    }
  }

  useEffect(() => {
    fetchProduct()
  }, [])

  return (
    <>
      {/* Products List */}
      <div className={styles.productList}>
        <Container>
          <Row>
            <Filter sortingData={sortData} />
            {
              productList.map((data, idx) => (
                <Col key={idx} lg={4} className=" mb-4">
                  <ProductCard product={data} />
                </Col>
              ))
            }
          </Row>
        </Container>
      </div>
    </>
  )
}