import React, { useEffect, useState } from 'react'

import styles from "./rangeSlider.module.css"

export default function RangeSlider({ price, rangeHandler }) {


  return (
    <div className={styles.rangeSlider}>
      <span>{0}</span>
      <input type="range" min={0} max={1000} onChange={rangeHandler} />
      <span>{price}</span>
    </div>
  )
}

