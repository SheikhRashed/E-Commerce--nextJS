import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Filter from "../../Components/Category/Filter/Filter";
import ProductList from "../../Components/Category/ProductList/ProductList";

import styles from "./products.module.css"


export default function CategoryScreen() {

  const [search, setSearch] = useState("");
  const [limit, setLimit] = useState(5);
  const [asc, setAsc] = useState(false);
  const [productList, setProductList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [selectedTag, setSelectedTag] = useState([]);
  const [price, setPrice] = useState(50)

  const [data, setData] = useState({
    category: [],
    tag: []
  })


  function toggleCategory(id) {
    const existingIndex = selectedCategory.indexOf(id);
    if (existingIndex === -1) {
      setSelectedCategory(prev => [...prev, id])
    } else {
      setSelectedCategory(prev => {
        const temp = [...prev];
        temp.splice(existingIndex, 1);
        return temp;
      })
    }
  }

  function toggleTag(id) {
    const existingIndex = selectedTag.indexOf(id);
    if (existingIndex === -1) {
      setSelectedTag(prev => [...prev, id])
    } else {
      setSelectedTag(prev => {
        const temp = [...prev];
        temp.splice(existingIndex, 1);
        return temp;
      })
    }
  }


  function handleSearch(e) {
    setSearch(e.target.value)
  }

  function handleLimit(e) {
    setLimit(e.target.value)
  }

  function handleRange(e) {
    setPrice(e.target.value)
  }



  const handleAsc = () => setAsc(!asc)


  async function fetchProduct(search, limit, asc, selectedCategory, selectedTag, price) {
    try {
      let url = `https://server.buniyadi.craftedsys.com/api/product?search=${search}&limit=${limit}&maximumPrice=${price}&resolvePrimaryCategory=1&sortOrder=${asc ? 1 : -1}&productCount=1&priceRange=1`
      console.log(url)
      if (selectedCategory?.length) {
        url += `&category=${selectedCategory.join(",")}`
      }

      if (selectedTag?.length) {
        url += `&tag=${selectedTag.join(",")}`
      }

      const response = await fetch(url);
      if (response.ok) {
        const jsonResponse = await response.json()
        setProductList(jsonResponse.data)
      }
    } catch (err) {
      console.log(err.message)
    }
  }

  async function fetchCategory() {
    try {

      const response = await fetch("https://server.buniyadi.craftedsys.com/api/category?productCount=1");

      if (response.ok) {
        const category = await response.json();

        setData(prevState => ({
          ...prevState,
          category: category.data
        }));
      } else {
        console.log("error status: " + response.status)
      }
    } catch (err) {
      console.log(err.message)
    }
  }


  async function fetchTags() {
    try {

      const response = await fetch("https://server.buniyadi.craftedsys.com/api/tag?productCount=1");

      if (response.ok) {
        const tag = await response.json();
        setData((prevState) => (
          {
            ...prevState,
            tag: tag.data
          }
        ))
      } else {
        console.log("error status: " + response.status)
      }
    } catch (err) {
      console.log(err.message)
    }
  }


  useEffect(() => {
    fetchProduct(search, limit, asc, selectedCategory, selectedTag, price)
  }, [search, limit, asc, selectedCategory, selectedTag, price])

  useEffect(() => {
    fetchCategory()
    fetchTags()
  }, [])


  return (
    <>
      {/* Products List */}
      <div className={styles.productList}>
        <Container>
          <Row>
            <div className="col-3">
              <Sidebar categoryList={data.category} tagList={data.tag} selectedCategory={selectedCategory} toggleCategory={toggleCategory} selectedTag={selectedTag} toggleTag={toggleTag} price={price} rangeHandler={handleRange} />
            </div>

            <div className="col-9">
              <Filter handleAsc={handleAsc} search={search} handleSearch={handleSearch} limit={limit} handleLimit={handleLimit} />

              <ProductList productList={productList} />
            </div>
          </Row>
        </Container>
      </div>
    </>
  )
}