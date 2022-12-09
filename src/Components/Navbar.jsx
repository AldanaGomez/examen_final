import React from 'react'
import { Link } from 'react-router-dom'
import { useContextGlobal } from './utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const {dispatch} = useContextGlobal()
  return (
    <nav>
      
        <Link to = "/home">Home</Link>
        <Link to = "/contacto">Contacto</Link>
        <Link to = "/favs">Favs</Link> 
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button onClick={() => {
          dispatch({type: 'Change theme'})
      }}>Change theme</button>
    </nav>
  )
}

export default Navbar