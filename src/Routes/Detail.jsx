import React from 'react'
import { useParams} from 'react-router-dom'
import{useEffect, useState } from 'react'
import axios from 'axios'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  
  
  const params = useParams()
  console.log(params.id)
  
  const [datos, setDatos] = useState({})
  
  useEffect(()=>{
    axios('https://jsonplaceholder.typicode.com/users/' + params.id)
    .then(res => setDatos(res.data))
  },[])
  console.log(datos.email)


  return (
    <>
      <h1>Detail Dentist id </h1>
      <h2>{datos.name}</h2>
      <h3>{datos.email}</h3>
      <h4>{datos.phone}</h4>
      <h3>{datos.website}</h3>
    </>
  )
}

export default Detail