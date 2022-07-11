import React from 'react'
import PrincipalActas from './PrincipalActas'
//import SubirActa from './SubirActa'
import { Container } from 'react-bootstrap'
import HeaderActa from './HeaderActa'

const Actas = () => {
  return (
    <div>
      <Container>
        <HeaderActa />
        {/* <SubirActa/> */}
        <PrincipalActas />
        </Container>
    </div>
  )
}

export default Actas