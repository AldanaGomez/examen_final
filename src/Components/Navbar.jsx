import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Contact from '../Routes/Contact'
import Detail from '../Routes/Detail'
import Home from '../Routes/Home'
import Favs from '../Routes/Favs'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  return (
    <nav>
      <Routes>
        <Route path = "/home" element ={<Home></Home>}/>
        <Route path = "/contacto" element ={<Contact></Contact>}/>
        <Route path = "/favs" element ={<Favs></Favs>}/>
        <Route path = "/dentist/:id" element ={<Detail></Detail>}/>
      </Routes>
        
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button>Change theme</button>
    </nav>
  )
}

export default Navbar