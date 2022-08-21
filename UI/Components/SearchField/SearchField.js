import React, { useState } from 'react';
import Image from "next/image";
import { Dialog, Combobox } from '@headlessui/react'
import styles from "./searchField.module.css"
import Link from "next/link";
export default function SearchField({ status, handler, products }) {

  const [query, setQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(products[null]);

  const filteredProduct = products.filter((product) => product.title.toLowerCase().includes(query.toLocaleLowerCase()));


  return (
    <Dialog open={status} onClose={handler} className={styles.dialogueWrapper}>
      <Dialog.Panel className={styles.dialogue}>
        <Combobox value={selectedProduct} onChange={setSelectedProduct}>
          <Combobox.Input onChange={(event) => setQuery(event.target.value)} placeholder="Search..." />
          <Combobox.Options className={styles.productList}>
            {filteredProduct.map((product, idx) => (
              <Combobox.Option key={idx} value={product}>
                <div className={styles.product}>
                  {/* image */}
                  <div className={styles.productImg}>
                    <Image src={`https://server.buniyadi.craftedsys.com/api/image/serve/${product?.cover}`} layout="fill" alt="demo" />
                  </div>
                  {/* Info */}
                  <Link href={`/product-details/?id=${product._id}`} >
                    <a className={styles.productTitle} onClick={handler}>
                      {product.title}
                    </a>
                  </Link>
                </div>
                {/* {person} */}
              </Combobox.Option>
            ))}
          </Combobox.Options>
        </Combobox>
      </Dialog.Panel>
    </Dialog>
  )
}