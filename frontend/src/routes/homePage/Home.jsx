import React from 'react'
import pessoas from '../../assets/pessoas.png'
import pessoa from '../../assets/pessoa-branca.png'
import capelo from '../../assets/capelo-branco.png'
import pessoaAzul from '../../assets/equipe.png'
import distintivo from '../../assets/distintivo.png'
import livro from '../../assets/livro.png'
import raio from '../../assets/raio.png'
import './home.css'
import { Link } from 'react-router'

const Home = () => {
  return (
    <main className='home-container'>

      <section className='home-apresentation'>
        <img src={capelo} alt="capelo branco" id='capelo' />
        <h1>EduSystem</h1>

        <p>Sistema escolar moderno e intuitivo para gestão de alunos. Interface limpa, funcionalidades completas e experiência otimizada.</p>

        <nav className='home-btn'>
          <div>
            <button className='btn admin'>
              <img src={pessoas} alt="pessoas" id='img-pessoas-btn' />
              <Link to="/painelAdmin">Painel Administrativo</Link>
            </button>
          </div>

          <div>
            <button className='btn students'>
              <img src={pessoa} alt="pessoa" id='img-pessoa-btn' />
              <Link to="perfilAluno">Área do Aluno</Link>
            </button>
          </div>

        </nav>
      </section>

      <section className='home-highlights'>
        <div className='highlights-title'>
          <h1>Funcionalidades Principais</h1>
          <p>Tudo que você precisa para gerenciar informações acadêmicas de forma eficiente</p>
        </div>
        <div className='highlights-cards'>
          <div className='card student-management'>
            <img src={pessoaAzul} alt="pessoa azul" />
            <h3>Gestão de Alunos</h3>
            <p>Cadastre, edite e gerencie informações completas dos alunos com facilidade</p>
          </div>

          <div className='card intuitive-interface'>
            <img src={livro} alt="livro" />
            <h3>Intuitiva Interface</h3>
            <p>Design moderno e responsivo, otimizado para desktop e mobile</p>
          </div>

          <div className='card student-profile'>
            <img src={distintivo} alt="distintivo" />
            <h3>Perfil do Aluno</h3>
            <p>Área dedicada para visualização de informações pessoais e acadêmicas</p>
          </div>
        </div>
      </section>

      <section className='home-action'>
        <img src={raio} alt="raio" />
        <h1>Pronto para começar?</h1>
        <p>Acesse o painel administrativo para gerenciar alunos ou visualize o perfil de estudante</p>

        <div className='action-btn'>
          <button className='btn-admin'>
            <Link to="/painelAdmin">Acessar Painel Admin</Link>
          </button>
          <button className='btn-student'>
            <Link to="/perfilAluno">Ver perfil do Aluno</Link>
          </button>
        </div>
      </section>

    </main>
  )
}

export default Home