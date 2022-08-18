import React, { useState, useEffect } from 'react'
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import ProductDetails from "../../Components/ProductDetails/ProductDetails";
import ProductList from "../../Components/ProductList/ProductList";
import { useRouter } from "next/router"


export default function ProductDetailsScreen() {
  const router = useRouter()
  const [productId, setProductId] = useState(null)
  const [productDetail, setProductDetail] = useState([]);
  const [productList, setProductList] = useState([]);




  async function fetchProductDetail(productId) {
    const response = await fetch(`https://server.buniyadi.craftedsys.com/api/product/${productId}?resolveCategory=1&resolvePrimaryCategory=1&resolveBrand=1&resolveTag=1&resolveCover=1&resolveImage=1`);
    if (response.ok) {
      setProductDetail(await response.json())
    }
  }



  async function fetchProduct(productId) {
    try {
      const response = await fetch(`https://server.buniyadi.craftedsys.com/api/product/${productId}/relatedProduct/?limit=6&resolvePrimaryCategory=1`);

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
    const id = router.query.id;
    setProductId(id);
  }, [router.isReady, router.query])


  useEffect(() => {
    if (productId) fetchProduct(productId)
  }, [productId])


  useEffect(() => {
    if (productId) {
      fetchProductDetail(productId)
    }
  }, [productId])




  return (
    <>
      {productDetail && <ProductDetails productDetail={productDetail} />}
      <ProductList productTitle="Related Products" productList={productList} />
    </>
  )
}