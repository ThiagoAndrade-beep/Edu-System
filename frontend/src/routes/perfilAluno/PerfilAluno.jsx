import React from 'react'
import NavPortalStudent from '../../components/NavPortalStudent'
import { Outlet } from 'react-router'
import PagePortalStudent from '../../components/PagePortalStudent'

const PerfilAluno = () => {
  return (
    <div>
      <NavPortalStudent />
      <Outlet />
      <PagePortalStudent />
    </div>
  )
}

export default PerfilAluno