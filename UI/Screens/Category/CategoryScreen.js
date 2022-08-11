import React, { useState, useEffect } from "react";
import { Listbox } from '@headlessui/react'
import { Container, Row, Col, Form } from "react-bootstrap";
import sortData from "../../../data/sort-data.json"
import { AiOutlineSortAscending } from "react-icons/ai"
import ProductCard from "../../Components/ProductCard/ProductCard";
import styles from "./category.module.css"


export default function CategoryScreen() {
  const [search, setSearch] = useState("");
  const [limit, setLimit] = useState(5);
  const [asc, setAsc] = useState(false);
  const [sort, setSort] = useState(sortData[0])
  const [productList, setProductList] = useState([]);


  function handleSearch(e) {
    setSearch(e.target.value)
  }

  function handleLimit(e) {
    setLimit(e.target.value)
  }
  const handleAsc = () => setAsc(!asc)

  async function fetchProduct(search, limit, asc) {
    try {
      const response = await fetch(`https://server.buniyadi.craftedsys.com/api/product?search=${search}&limit=${limit}&resolvePrimaryCategory=1&sortOrder=${asc ? 1 : -1}`);

      if (response.ok) {
        const jsonResponse = await response.json()
        setProductList(jsonResponse.data)

      }
    } catch (err) {
      console.log(err.message)
    }
  }

  useEffect(() => {
    fetchProduct(search, limit, asc)
  }, [search, limit, asc])






  return (
    <>
      {/* Products List */}
      <div className={styles.productList}>
        <Container>
          <Row>
            {/* <Filter sortingData={sortData} /> */}
            <div className={styles.filter}>
              <div className={styles.filterSort}>
                <span>Sort: </span>
                <button onClick={handleAsc}>
                  <AiOutlineSortAscending />
                </button>
              </div>
              <div className={styles.searchImage}>
                <Form.Control name="searchText" placeholder="Search..." className={styles.searchField} onChange={handleSearch} value={search} />
                <Form.Select name="selectAmount" aria-label="Select Image" className={styles.selectValue} onChange={handleLimit} value={limit}>
                  <option value="5">5</option>
                  <option value="10">10</option>
                  <option value="15">15</option>
                  <option value="20">20</option>
                </Form.Select>
              </div>
            </div>
            {
              productList.map((data, idx) => (
                <Col key={idx} lg={4} className=" mb-4">
                  <ProductCard product={data} />
                </Col>
              ))
            }
            {/* {
              product.map((data, idx) => (
                <Col key={idx} lg={4} className=" mb-4">
                  <ProductCard product={data} />
                </Col>
              ))
            } */}
          </Row>
        </Container>
      </div>
    </>
  )
}