import React from 'react'
import { Row, Col } from "react-bootstrap";
import ProductCard from "../../ProductCard/ProductCard";
export default function ProductList({ productList }) {
  return <Row>
    {
      productList?.map((data, idx) => (
        <Col key={idx} lg={4} className=" mb-4">
          <ProductCard product={data} />
        </Col>
      ))
    }
  </Row>
}
