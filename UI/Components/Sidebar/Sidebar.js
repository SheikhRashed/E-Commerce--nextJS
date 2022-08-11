import React, { useState, useEffect } from 'react'
import { Disclosure } from '@headlessui/react'
import { RadioGroup } from '@headlessui/react'
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"
import styles from "./sidebar.module.css"
import Link from "next/link"

export default function Sidebar() {
  const [color, setColor] = useState('black')
  const [categoryList, setCategoryList] = useState([]);
  const [brandList, setBrandList] = useState([]);
  const [tagList, setTagList] = useState([]);

  async function fetchProduct() {
    try {

      const response = await fetch("https://server.buniyadi.craftedsys.com/api/category");

      if (response.ok) {
        const category = await response.json();
        setCategoryList(category.data)
      } else {
        console.log("error status: " + response.status)
      }
    } catch (err) {
      console.log(err.message)
    }
  }


  async function fetchBrand() {
    try {

      const response = await fetch("https://server.buniyadi.craftedsys.com/api/brand");

      if (response.ok) {
        const brand = await response.json();
        setBrandList(brand.data)
      } else {
        console.log("error status: " + response.status)
      }
    } catch (err) {
      console.log(err.message)
    }
  }


  async function fetchTags() {
    try {

      const response = await fetch("https://server.buniyadi.craftedsys.com/api/tag");

      if (response.ok) {
        const tag = await response.json();
        setTagList(tag.data)
      } else {
        console.log("error status: " + response.status)
      }
    } catch (err) {
      console.log(err.message)
    }
  }

  useEffect(() => {
    fetchProduct()
    fetchBrand()
    fetchTags()
  }, [])

  return (
    <div className={styles.sidebar}>

      {/* Category  */}
      <Disclosure defaultOpen="true" >
        {({ open }) => (
          <>
            <Disclosure.Button className={styles.accordionHeader}>
              <span className={styles.accordionTitle}>Category</span>

              {
                open ? <AiOutlineMinus className={styles.accordionIcon} /> : <AiOutlinePlus className={styles.accordionIcon} />
              }
            </Disclosure.Button>
            <Disclosure.Panel>
              <div className={styles.accordionBody}>
                <ul className={styles.productItems}>

                  {
                    categoryList.map((category, idx) => (
                      <li key={idx}>
                        <Link href={"/"}>
                          <a>
                            {category.title}
                          </a>
                        </Link>
                      </li>
                    ))
                  }
                </ul>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      {/* Category  */}
      <Disclosure defaultOpen="true">
        {({ open }) => (
          <>
            <Disclosure.Button className={styles.accordionHeader}>
              <span className={styles.accordionTitle}>Brand</span>

              {
                open ? <AiOutlineMinus className={styles.accordionIcon} /> : <AiOutlinePlus className={styles.accordionIcon} />
              }
            </Disclosure.Button>
            <Disclosure.Panel>
              <div className={styles.accordionBody}>
                <ul className={styles.productItems}>

                  {
                    brandList.map((brand, idx) => (
                      <li key={idx}>
                        <Link href={"/"}>
                          <a>
                            {brand.title}
                          </a>
                        </Link>
                      </li>
                    ))
                  }
                </ul>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      {/* Category  */}
      <Disclosure defaultOpen="true">
        {({ open }) => (
          <>
            <Disclosure.Button className={styles.accordionHeader}>
              <span className={styles.accordionTitle}>Tags</span>

              {
                open ? <AiOutlineMinus className={styles.accordionIcon} /> : <AiOutlinePlus className={styles.accordionIcon} />
              }
            </Disclosure.Button>
            <Disclosure.Panel>
              <div className={styles.accordionBody}>
                <ul className={styles.tagLists}>

                  {
                    tagList.map((tag, idx) => (
                      <li key={idx}>
                        <Link href={"/"}>
                          <a>
                            {tag.title}
                          </a>
                        </Link>
                      </li>
                    ))
                  }
                </ul>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      {/* Custom Block */}

      <div className={styles.customBlock}>
        <h2>Block Title</h2>
        <span>Block Subtitle</span>
        <blockquote>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident nihil eaque, praesentium maxime laboriosam veritatis ad cum recusandae voluptate repellendus blanditiis magnam rem quisquam consequuntur minima. Earum accusamus enim magnam!
          </p>
        </blockquote>
      </div>

    </div>
  )
}
