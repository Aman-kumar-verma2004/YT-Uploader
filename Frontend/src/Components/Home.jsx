import React from 'react'
import { Outlet } from 'react-router'
import CustomNavbar from './CustomNavbar'

function Home() {
  return (
    <div>
      <CustomNavbar />
      <Outlet />
    </div>
  )
}

export default Home
