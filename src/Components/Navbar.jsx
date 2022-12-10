import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  
  return (
    <nav>
      <Link to = "/home">Home</Link>
      <Link to = "/contacto">Contacto</Link>
      <Link to = "/favs">Favs</Link> 
      <button onClick={() => document.querySelector('.App').classList.toggle('dark')}>Change theme</button>
    </nav>
  )
}

export default Navbar