import React from 'react'
import NavBar from '../components/NavBar'
import { Outlet } from 'react-router'

const MainLayout = () => {
  return (
    <div className='min-h-screen w-full bg-gradient-to-b from-slate-950 via-slate-900 to-black'>
        <NavBar/>
        <Outlet/>
    </div>
  )
}

export default MainLayout