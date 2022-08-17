import React, { useEffect, useState } from 'react'

import styles from "./rangeSlider.module.css"

export default function RangeSlider({ rangeHandler }) {


  return (
    <div className={styles.rangeSlider}>
      <span>{0}</span>
      <input type="range" min={0} max={500} onChange={rangeHandler} />
      <span>{500}</span>
    </div>
  )
}

