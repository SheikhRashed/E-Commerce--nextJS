import React, { useEffect, useState } from 'react'

import styles from "./rangeSlider.module.css"


export default function RangeSlider({ priceRange, rangeHandler, userPrice }) {

  console.log({ priceRange })
  return (
    <div className={styles.rangeSlider}>
      <span>{priceRange.minimumOfferPrice}</span>
      <input type="range" min={priceRange.minimumOfferPrice} max={priceRange.maximumRegularPrice} onChange={rangeHandler} />
      <span>{priceRange.maximumRegularPrice}</span>
    </div>
  )
}

