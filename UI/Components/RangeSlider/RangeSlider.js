import React, { useEffect } from 'react'

import Range from "nouislider"

export default function RangeSlider() {
  // Range.create(document.getElementById("rangeSlider"), {
  //   start: [0, 90],
  //   connect: [false, true, false],
  //   step: 1,
  //   range: { min: 0, max: 100 },
  // });
  useEffect(() => {
    Range.create(document.getElementById("rangeSlider"), {
      start: [0, 90],
      connect: [false, true, false],
      step: 1,
      range: { min: 0, max: 100 },
    });
  }, [])
  return <div className="slider input-slider" id="rangeSlider"></div>
}

