import React from 'react'
import Header from '../header/Header'
import { Outlet } from 'react-router-dom'

const Root = () => {
  return (
    <div>
        <Header/>
        <Outlet/>
    </div>
  )
}

export default Root