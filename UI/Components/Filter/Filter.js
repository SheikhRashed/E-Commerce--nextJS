import React, { useState } from 'react'
import { Listbox } from '@headlessui/react'
import styles from "./filter.module.css"


const showData = [
  {
    value: 10,
  },
  {
    value: 20,
  },
  {
    value: 30,
  },
  {
    value: 40,
  },
]

export default function Filter({ sortingData }) {
  const [sort, setSort] = useState(sortingData[0])
  const [show, setShow] = useState(showData[0])


  return (
    <>
      <div className={styles.filter}>
        <div className="filterSort">
          <span>Sort: </span>
          <Listbox value={sort} onChange={setSort}>
            <Listbox.Button className={styles.selectBox}>{sort.name}</Listbox.Button>
            <Listbox.Options className={styles.selectDropdown}>
              {sortingData.map((data, idx) => (
                <Listbox.Option
                  key={idx}
                  value={data}
                  disabled={data.unavailable}
                >
                  {data.name}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Listbox>
        </div>
        <div className="filterShow">
          <span> Show: </span>
          <Listbox value={show} onChange={setShow}>
            <Listbox.Button className={styles.selectBox}>{show.value}</Listbox.Button>
            <Listbox.Options className={styles.selectDropdown}>
              {showData.map((data, idx) => (
                <Listbox.Option
                  key={idx}
                  value={data}
                  disabled={data.unavailable}
                >
                  {data.value}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Listbox>
        </div>
      </div>
    </>
  )
}
