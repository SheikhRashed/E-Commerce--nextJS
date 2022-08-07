import React from 'react';
import { Modal } from "bootstrap";


export default function SearchField({ status, handler }) {
  return (
    <Modal show={status} onHide={handler}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa neque cumque quam asperiores impedit! Exercitationem, numquam corporis eius sit officiis nihil alias nesciunt nemo sapiente? Cumque dolores deleniti at quas?
      </Modal.Body>
    </Modal>
  )
}