import React from 'react'
import { Outlet } from 'react-router-dom'
import Card from '../Components/Card'
import { useContextGlobal } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const {data} = useContextGlobal()
  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        <Outlet/>
        {data?.map(data=><Card name={data.name} id = {data.id} username={data.username} key = {data.id}></Card>)}
        
      </div>
    </main>
  )
}

export default Home