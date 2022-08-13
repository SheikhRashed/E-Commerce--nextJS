import React, { useState, useEffect } from 'react'
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import CategoryDetails from "../../Components/CategoryDetails/CategoryDetails";
import CategoryList from "../../Components/CategoryList/CategoryList";


export default function CategoryDetailsScreen() {

  const [productList, setProductList] = useState([]);

  async function fetchProduct() {
    try {
      const response = await fetch("https://server.buniyadi.craftedsys.com/api/product?limit=6&resolvePrimaryCategory=1");

      if (response.ok) {
        const jsonResponse = await response.json();
        setProductList(jsonResponse.data)
      } else {
        console.log("error status: " + response.status)
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
      <CategoryDetails />
      <CategoryList productList={productList} />
    </>
  )
}