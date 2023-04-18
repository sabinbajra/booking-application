import React from 'react'
import NavBar from './navbar/NavBar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='p-4 flex flex-col min-h-screen'>
        <NavBar/>
        <Outlet/>

    </div>
  )
}

export default Layout