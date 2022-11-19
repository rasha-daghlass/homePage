import React from 'react'
import { NavScrollExample } from '../NavBar'
import { Outlet } from 'react-router-dom'
import Header from '../header'
import Footer from '../footer'

const Layout = () => {
  return (
    <div>
        <Header/>
        <NavScrollExample/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Layout