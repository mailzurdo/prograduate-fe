import React from 'react'
import '../css/header.css'
import LogoUDE from '../data/universidad-de-la-empresa-ude.png'

const Header = () => {
  return (
        <div className='AppHeader'>
            <a href="www.ude.edu.uy" className="logo me-2">
                <img src={LogoUDE} alt="" />
            </a>
            <h2 className="fw-bold mb-0">
                Certificados y Diplomas del Campus Virtual
            </h2>
        </div>
  )
}

export default Header