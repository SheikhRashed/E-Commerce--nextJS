import React, { useState, useEffect } from 'react'
import { Disclosure } from '@headlessui/react'
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"
import { ImCheckboxChecked, ImCheckboxUnchecked } from "react-icons/im"
import styles from "./sidebar.module.css"
import RangeSlider from "../RangeSlider/RangeSlider"

export default function Sidebar({ categoryList, tagList, selectedCategory, toggleCategory, selectedTag, toggleTag, price, rangeHandler }) {

  return (
    <div className={styles.sidebar}>

      {/* Category  */}
      <Disclosure defaultOpen="true" >
        {({ open }) => {
          return (
            <>
              <Disclosure.Button className={styles.accordionHeader}>
                <span className={styles.accordionTitle}>Category</span>

                {open ? <AiOutlineMinus className={styles.accordionIcon} /> : <AiOutlinePlus className={styles.accordionIcon} />}
              </Disclosure.Button>
              <Disclosure.Panel>
                <div className={styles.accordionBody}>
                  {
                    categoryList.map((category, idx) => (
                      <div key={idx} className="d-flex justify-content-between align-items-center px-2 mx-1" onClick={() => toggleCategory(category._id)} role="button">
                        <p className="ps-1">{category.title} <span className="text-muted small">({category.productCount})</span> </p>
                        {selectedCategory.includes(category._id) ? <ImCheckboxChecked className={styles.checkIcon} /> : <ImCheckboxUnchecked className={styles.checkIcon} />}
                      </div>
                    ))
                  }
                </div>
              </Disclosure.Panel>
            </>
          )
        }}
      </Disclosure>

      {/* Tags  */}
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
                {
                  tagList.map((tag, idx) => (
                    <div key={idx} className="d-flex justify-content-between align-items-center px-2 mx-1" onClick={() => toggleTag(tag._id)} role="button">
                      <p className="ps-1">{tag.title} <span className="text-muted small">({tag.productCount})</span> </p>
                      {selectedTag.includes(tag._id) ? <ImCheckboxChecked className={styles.checkIcon} /> : <ImCheckboxUnchecked className={styles.checkIcon} />}
                    </div>
                  ))
                }
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      {/* Price Range  */}
      <Disclosure defaultOpen="true">
        {({ open }) => (
          <>
            <Disclosure.Button className={styles.accordionHeader}>
              <span className={styles.accordionTitle}>Price Range</span>
              {
                open ? <AiOutlineMinus className={styles.accordionIcon} /> : <AiOutlinePlus className={styles.accordionIcon} />
              }
            </Disclosure.Button>
            <Disclosure.Panel>
              <div className={styles.accordionBody}>
                <RangeSlider price={price} rangeHandler={rangeHandler} />
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
