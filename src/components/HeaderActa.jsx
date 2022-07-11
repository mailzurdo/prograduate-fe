import React from 'react'
import Plus from '../data/plus32x32.png'
import '../css/header.css'
import Modal from 'react-bootstrap/Modal'
import {useState} from "react";
import Button from 'react-bootstrap/Button'
import SubirActa from './SubirActa'

const HeaderActa = () => {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="headerActa">
        <h2>Gestión de Actas</h2>
        {/* <img src={Plus} alt="Agregar Acta" href='' /> */}
        <Button variant="primary" onClick={handleShow}>
            AGREGAR
        </Button>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Ingresar Acta</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <SubirActa></SubirActa>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            
            </Modal.Footer>
        </Modal>

    </div>
    // <Row>
    //     <Col><h2>Gestión de Actas</h2></Col>  <Col className=''><img src={Plus} alt="Agregar Acta" href='' /></Col> 
    // </Row>
  )
}

export default HeaderActa