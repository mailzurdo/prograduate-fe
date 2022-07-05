import React from 'react'
import PrincipalActas from './PrincipalActas'
import SubirActa from './SubirActa'

const Actas = () => {
  return (
    <div>
        <h2>Gestión de Actas</h2>
        <SubirActa/>
        <PrincipalActas />
    </div>
  )
}

export default Actas