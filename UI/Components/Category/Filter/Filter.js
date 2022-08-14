import React from 'react'
import { Form } from "react-bootstrap";
import { AiOutlineSortAscending } from "react-icons/ai"
import styles from "./filter.module.css"

export default function Filter({ handleAsc, search, handleSearch, limit, handleLimit }) {
  return (
    <div className={styles.filter}>
      <div className={styles.filterSort}>
        <span>Sort: </span>
        <button onClick={handleAsc}>
          <AiOutlineSortAscending />
        </button>
      </div>

      <div className={styles.searchImage}>
        <Form.Control name="searchText" placeholder="Search..." className={styles.searchField} onChange={handleSearch} value={search} />
        <Form.Select name="selectAmount" aria-label="Select Image" className={styles.selectValue} onChange={handleLimit} value={limit}>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
        </Form.Select>
      </div>

    </div>
  )
}
