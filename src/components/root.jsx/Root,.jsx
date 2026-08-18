import React from 'react'
import Header from '../header/Header'
import './Root.css'
import { Outlet } from 'react-router-dom'
import Footer from '../footer.jsx/Footer'

const Root = () => {

  

  return (
    <div className='root'>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Root