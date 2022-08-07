import React, { useState } from 'react'
import { Disclosure } from '@headlessui/react'
import { RadioGroup } from '@headlessui/react'
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"
import styles from "./sidebar.module.css"

export default function Sidebar() {
  const [color, setColor] = useState('black')

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
                  <li>
                    <p>Product Name</p>
                  </li>
                  <li>
                    <p>Product Name</p>
                  </li>
                  <li>
                    <p>Product Name</p>
                  </li>
                  <li>
                    <p>Product Name</p>
                  </li>
                </ul>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      {/* Price  */}
      {/* <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className={styles.accordionHeader}>
              <span className={styles.accordionTitle}>Price</span>
              {
                open ? <AiOutlineMinus className={styles.accordionIcon} /> : <AiOutlinePlus className={styles.accordionIcon} />
              }
            </Disclosure.Button>
            <Disclosure.Panel>
              <div className={styles.accordionBody}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam est eveniet quaerat iusto pariatur vero maiores, expedita facilis excepturi aliquam, blanditiis commodi. Est, dignissimos iste exercitationem impedit veritatis labore ex? </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure> */}

      {/* Choose Colors  */}
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className={styles.accordionHeader}>
              <span className={styles.accordionTitle}>Colors</span>
              {
                open ? <AiOutlineMinus className={styles.accordionIcon} /> : <AiOutlinePlus className={styles.accordionIcon} />
              }
            </Disclosure.Button>
            <Disclosure.Panel>
              <div className={styles.acacordionBody}>
                <RadioGroup value={color} onChange={setColor} className={styles.colorsWrapper}>
                  <RadioGroup.Option value="black">
                    {({ checked }) => (
                      <span className={`${styles.colorBox} ${checked && styles.checkedBox}   ${styles.black}`}></span>
                    )}
                  </RadioGroup.Option>
                  <RadioGroup.Option value="blue">
                    {({ checked }) => (
                      <span className={`${styles.colorBox} ${checked && styles.checkedBox}   ${styles.blue}`}></span>
                    )}
                  </RadioGroup.Option>
                  <RadioGroup.Option value="red">
                    {({ checked }) => (
                      <span className={`${styles.colorBox} ${checked && styles.checkedBox}   ${styles.red}`}></span>
                    )}
                  </RadioGroup.Option>
                  <RadioGroup.Option value="yellow">
                    {({ checked }) => (
                      <span className={`${styles.colorBox} ${checked && styles.checkedBox}   ${styles.yellow}`}></span>
                    )}
                  </RadioGroup.Option>
                </RadioGroup>
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
