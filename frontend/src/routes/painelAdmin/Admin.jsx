import React from 'react'
import NavAdmin from '../../components/NavAdmin'
import { Outlet } from 'react-router'

const Admin = () => {
  return (
    <div className='admin-container'>
      <NavAdmin />
      <Outlet />
    </div>
  )
}

export default Admin