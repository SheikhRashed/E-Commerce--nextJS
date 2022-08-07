import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import sortData from "../../../data/sort-data.json"
import productData from "../../../data/latest-product.json"

import ProductCard from "../../Components/ProductCard/ProductCard";
import Filter from "../../Components/Filter/Filter";

import styles from "./category.module.css"


export default function CategoryScreen() {
  return (
    <>
      {/* Products List */}
      <div className={styles.productList}>
        <Container>
          <Row>
            <Filter sortingData={sortData} />
            {
              productData.map((data, idx) => (
                <Col key={idx} lg={4} className=" mb-4">
                  <ProductCard data={data} />
                </Col>
              ))
            }
          </Row>
        </Container>
      </div>
    </>
  )
}