import React from 'react'
import Navbar from '../Components/Shared/Navbar/Navbar'
import { Outlet } from 'react-router'
import Footer from '../Components/Shared/Footer/Footer'

const MainLayout = () => {
  return (
    <div className='dark:bg-black_primary-900'>
      <Navbar></Navbar>
      <div className="container pt-20 mx-auto">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default MainLayout