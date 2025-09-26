import React from 'react'
import { Link } from 'react-router'
import capelo from '../assets/capelo.png'
import pessoas from '../assets/pessoas.png'
import pessoa from '../assets/pessoa.png'
import './navBar.css'

const NavBar = () => {
  return (
    <nav className='navBar-container'>
        <div className='navBar-title'>
            <img src={capelo} alt="capelo" />
            <h2>EduSystem</h2>
        </div>
        <div className='navBar-nav'>
          <div className='nav-admin'>
              <img src={pessoas} alt="pessoas"/>
              <Link to="/painelAdmin">Painel Administrativo</Link>
          </div>
          <div className='nav-student'>
              <img src={pessoa} alt="pessoa" />
              <Link to="/perfilAluno">Perfil do Aluno</Link>
          </div>
        </div>
    </nav>
  )
}

export default NavBar