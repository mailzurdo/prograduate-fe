import React from 'react'
import './App.css'
import Navigation from './components/Navigation'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Actas from './components/Actas'
import Usuarios from './components/Usuarios'
import Cursos from './components/Cursos'
import Home from './components/Home'
import Header from './components/Header'

const App = () => {
  return (
    <Router>
      
      <Navigation />
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="Actas" element={<Actas />}/>
          <Route path="/Usuarios" element={<Usuarios />} />
          <Route path="/Cursos"  element={<Cursos />} exact />

      </Routes>
    </Router>
  )
}

export default App


