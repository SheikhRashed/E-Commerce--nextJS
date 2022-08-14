import React, { useState, useEffect } from "react";
import { Listbox } from '@headlessui/react'
import { Container, Row, Col, Form } from "react-bootstrap";
import sortData from "../../../data/sort-data.json"
import { AiOutlineSortAscending } from "react-icons/ai"
import ProductCard from "../../Components/ProductCard/ProductCard";
import styles from "./category.module.css"
import Sidebar from "../../Components/Sidebar/Sidebar";


export default function CategoryScreen() {
  const [search, setSearch] = useState("");
  const [limit, setLimit] = useState(5);
  const [asc, setAsc] = useState(false);
  const [productList, setProductList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [selectedTag, setSelectedTag] = useState([])
  const [data, setData] = useState({
    category: [],
    tag: []
  })
  console.log(data)


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
  const handleAsc = () => setAsc(!asc)

  // Fetch wise category, brand, tags [etc...]

  async function fetchProduct(search, limit, asc, selectedCategory, selectedTag) {
    try {
      let url = `https://server.buniyadi.craftedsys.com/api/product?search=${search}&limit=${limit}&resolvePrimaryCategory=1&sortOrder=${asc ? 1 : -1}&productCount=1`

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
    fetchProduct(search, limit, asc, selectedCategory, selectedTag)
    fetchCategory()
    fetchTags()
  }, [search, limit, asc, selectedCategory, selectedTag])




  return (
    <>
      {/* Products List */}
      <div className={styles.productList}>
        <Container>
          <Row>
            <div className="col-3">
              <Sidebar categoryList={data.category} tagList={data.tag} selectedCategory={selectedCategory} toggleCategory={toggleCategory} selectedTag={selectedTag} toggleTag={toggleTag} />
            </div>

            <div className="col-9">
              <Row>
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
              </Row>
            </div>
          </Row>
        </Container>
      </div>
    </>
  )
}