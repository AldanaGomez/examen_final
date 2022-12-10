import React from 'react'
import { useParams} from 'react-router-dom'
import{useEffect, useState } from 'react'
import axios from 'axios'


const Detail = () => {
  
  
  const params = useParams()
  const [datos, setDatos] = useState({})
  
  useEffect(()=>{
    axios('https://jsonplaceholder.typicode.com/users/' + params.id)
    .then(res => setDatos(res.data))
  },[])
  return (
    <div>
    <h1> Detail Dentist {params.id}</h1>
    <table>
      <tr>
        <th>Name</th>
        <th>email</th>
        <th>phone</th>
        <th>web</th>
      </tr>
      <tr>
        <td>{datos.name}</td>
        <td>{datos.email}</td>
        <td>{datos.phone}</td>
        <td>{datos.website}</td>
      </tr>
    </table>
  </div>
  )
}

export default Detail