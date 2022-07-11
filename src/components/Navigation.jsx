import React from 'react';
import '../css/navigation.css' 
import LogoUDE from '../data/universidad-de-la-empresa-ude.png'
import {Nav,NavLink,NavMenu,Bars, NavBtnLink,NavBtn} from './NavBarElements'
 
const Navigation = () => {
    return (
      <>
       <Nav>
         <NavLink to="/">
            <img src={LogoUDE} alt="Inicio" /> 
         </NavLink>
         <Bars/>
         <NavMenu>
            <NavLink to="/Actas" activeStyle> Actas </NavLink>
            <NavLink to="/Usuarios" activeStyle> Usuarios </NavLink>
            <NavLink to="/Cursos" activeStyle> Cursos/Carreras </NavLink>
         </NavMenu>
         {/* <NavBtn>
            <NavBtnLink to='/signin'>Entrar</NavBtnLink>
         </NavBtn> */}
       </Nav>
           
       </>
    );
}
 
export default Navigation