import React from 'react'
import Sidebar from "../Sidebar/Sidebar";
import Layout from "./Layout";
import styles from "./layout.module.css"
import { Container, Row, Col } from "react-bootstrap";


function NestedLayout({ children }) {
  return (
    <Layout>
      {/* nested wrapper  */}
      <div className={styles.nestedWrapper}>
        <Container>
          <Row>
            <Col lg={3}>
              <div className={styles.wrapperColOne}>
                <Sidebar />
              </div>
            </Col>
            <Col lg={9}>
              <div className={styles.wrapperColTwo}>
                {children}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Layout>
  )
}

export default NestedLayout