import React from 'react'
import { Link } from 'react-router'
import pessoa from '../assets/pessoa.png'
import pessoas from '../assets/pessoas.png'
import pessoasBrancas from '../assets/pessoas-brancas.png'
import './navAdmin.css'

const NavAdmin = () => {
  return (
    <nav className='navAdmin-container'>
        <div className='navAdmin-title'>
            <h1>Painel Administrativo</h1>
            <p>Gerencie alunos, cadastros e informações acadêmicas</p>
        </div>
        <div className='navAdmin-actions'>
            <button className='btn-list-student'>
                <img src={pessoa} alt="pessoa" />
                <Link to="listadeAlunos">Lista de Alunos</Link>
            </button>
            <button className='btn-register-student'>
                <img src={pessoasBrancas} alt="pessoas" />
                <Link to="cadastrarAlunos">Cadastrar Alunos</Link>
            </button>
        </div>
    </nav>
  )
}

export default NavAdmin