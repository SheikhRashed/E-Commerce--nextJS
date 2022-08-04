import React from 'react'
import { Disclosure } from '@headlessui/react'
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"
import styles from "./sidebar.module.css"

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>

      <Disclosure >
        {({ open }) => (
          <>
            <Disclosure.Button className={styles.accordionHeader}>
              <span className={styles.accordionTitle}>Category</span>

              {
                open ? <AiOutlineMinus className={styles.accordionIcon} /> : <AiOutlinePlus className={styles.accordionIcon} />
              }

            </Disclosure.Button>
            <Disclosure.Panel className={styles.accordionBody}>
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
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className={styles.accordionHeader}>
              <span className={styles.accordionTitle}>Price</span>

              {
                open ? <AiOutlineMinus className={styles.accordionIcon} /> : <AiOutlinePlus className={styles.accordionIcon} />
              }

            </Disclosure.Button>
            <Disclosure.Panel>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  )
}
