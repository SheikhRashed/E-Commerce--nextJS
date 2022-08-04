import React from 'react'
import Sidebar from "../Sidebar/Sidebar";
import Layout from "./Layout";
import styles from "./layout.module.css"

function NestedLayout({ children }) {
  return (
    <Layout>
      {/* nested wrapper  */}
      <div className="container">

        <div className={styles.wrapper}>
          <div className={styles.wrapperColOne}>
            <Sidebar />
          </div>
          <div className={styles.wrapperColTwo}>
            {children}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default NestedLayout