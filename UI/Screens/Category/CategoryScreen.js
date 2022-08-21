import React from 'react';
import { useRouter } from "next/router";
import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "../../Components/ProductCard/ProductCard";
import { useState } from "react";
import { useEffect } from "react";
import Link from "next/link";

export default function CategoryScreen() {

  // Category page State 
  const router = useRouter()
  const [categoryDetails, setCategoryDetails] = useState({})
  const [products, setProducts] = useState([])


  // Fetch Products From Category ID 
  async function fetchProducts(categoryID) {

    try {

      let url = `https://server.buniyadi.craftedsys.com/api/product?`;

      if (categoryID) {
        url += `category=${categoryID}&resolveCategory=1`
      }

      const response = await fetch(url)

      if (response.ok) {
        const jsonResponse = await response.json();
        setProducts(jsonResponse.data)

      }
    } catch (err) {
      console.log(err.message)
    }

  }

  async function fetchCategory(categoryID) {

    try {

      let url = `https://server.buniyadi.craftedsys.com/api/category`;

      if (categoryID) {
        url += `/${categoryID}?productCount=1`
      }
      const res = await fetch(url);

      if (res.ok) {
        const jsonRes = await res.json();
        setCategoryDetails(jsonRes)
      }

    } catch (err) {
      console.log(err.message)
    }
  }

  useEffect(() => {
    const id = router.query.id;
    fetchCategory(id)
    fetchProducts(id)
  }, [router.isReady, router.query])

  return (
    <Container>
      <Row>
        <div className="d-flex align-items-center justify-content-between">
          <h2 className="fs-2 mb-2">{categoryDetails.title}<small className="fs-5 text-success">({categoryDetails.productCount})</small> </h2>
          <Link href="/">
            <a className="text-none fw-bold">
              Return Home
            </a>
          </Link>
        </div>
        {
          products.map(product => (
            < Col lg={4} key={product._id} className="my-3" >
              <ProductCard product={product} />
            </Col>
          ))
        }
      </Row>
    </Container >
  )
}
