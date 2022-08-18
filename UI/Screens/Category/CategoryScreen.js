import React from 'react';
import { useRouter } from "next/router";
import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "../../Components/ProductCard/ProductCard";
import { useState } from "react";
import { useEffect } from "react";

export default function CategoryScreen() {
  const router = useRouter()
  const [categoryID, setCategoryID] = useState('62e9568259c9749104839589')
  const [products, setProducts] = useState([])

  console.log(products)

  async function fetchCategory(id) {

    try {

      let url = `https://server.buniyadi.craftedsys.com/api/product`

      if (id) {
        url += `?category=${id}`
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
    setCategoryID(id)

  }, [router.isReady, router.query,])

  useEffect(() => {
    fetchCategory(categoryID)
  }, [categoryID])


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
