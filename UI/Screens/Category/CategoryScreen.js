import React from 'react';
import { useRouter } from "next/router";
import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "../../Components/ProductCard/ProductCard";
import { useState } from "react";
import { useEffect } from "react";

export default function CategoryScreen() {

  // Category page State 
  const router = useRouter()
  const [products, setProducts] = useState([])

  // Fetch Products From Category ID 
  async function fetchCategory(categoryID) {

    try {

      let url = `https://server.buniyadi.craftedsys.com/api/product?`;

      if (categoryID) {
        url += `category=${categoryID}`
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

  useEffect(() => {
    const id = router.query.id;
    fetchCategory(id)
  }, [router.isReady, router.query])

  return (
    <Container>
      <Row>
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
