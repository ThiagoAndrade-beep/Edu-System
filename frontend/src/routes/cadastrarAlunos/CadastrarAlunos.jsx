import React, { useEffect, useState } from 'react'
import './cadastrarAluno.css'
import adicionarUsuario from '../../assets/adicionar-usuario.png'
import adicionarUsuarioBranco from '../../assets/adicionar-usuario-branco.png'
import fetchApi from '../../axios/config'
import { ToastContainer, toast } from 'react-toastify';

const CadastrarAlunos = () => {
  const [name, setName] = useState(null)
  const [rg, setRg] = useState(null)
  const [email, setEmail] = useState(null)
  const [age, setAge] = useState(null)
  const [serie, setSerie] = useState(null)

  const data = {
    name,
    rg,
    email,
    age,
    serie,
  }

  const handleSubmit = async(e) => {
      e.preventDefault()

      try {
        const response = await fetchApi.post("/register", data)
        console.log("Resposta:", response.data)

        toast.success(response.data.Mensagem)
      } catch (error) {
        console.log(error)
        toast.error("Erro ao cadastrar")
      }
  }

  return (
    <section className='register-container'>
      <div className='register'>
        <div className='register-title'>
          <img src={adicionarUsuario} alt="adicionar usuário" />
          <h3>Cadastrar Alunos</h3>
        </div>

        <form onSubmit={handleSubmit}>
          <div className='register-students'>
            <label>
              <span>Nome completo *</span>
              <input type="text" placeholder='Digite o nome completo' required name='name' value={name} onChange={(e) => setName(e.target.value)}/>
            </label>
            <label>
              <span>RG *</span>
              <input type="text" placeholder='00.000.000-00' required name='rg' value={rg} onChange={(e) => setRg(e.target.value)}/>
            </label>
            <label>
              <span>Email *</span>
              <input type="text" placeholder='Digite o email' required name='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
            </label>
            <label>
              <span>Idade *</span>
              <input type="number" placeholder='idade' required name='age' value={age} onChange={(e) => setAge(e.target.value)}/>
            </label>
            <label>
              <span>Série/Sala *</span>
              <input type="text" placeholder='Exemplo: 1A' required name='room' value={serie} onChange={(e) => setSerie(e.target.value)}/>
            </label>
          </div>
            <button className='btn-register' type='submit'>
                <img src={adicionarUsuarioBranco} alt="boneco branco" />
                Cadastrar Aluno
            </button>
        </form>
      </div>
      <ToastContainer />
    </section>
  )
}

export default CadastrarAlunos