import React, { useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom";
import './listAlunos.css'
import email from '../../assets/email.png'
import calendario from '../../assets/calendario.png'
import rg from '../../assets/cartao-de-identidade.png'
import editar from '../../assets/botao-editar.png'
import excluir from '../../assets/excluir.png'
import pessoaAzul from '../../assets/pessoasAzul.png'
import fetchApi from '../../axios/config'


const ListAlunos = () => {
    const [data, setData] = useState(null)
    const [searchStundent, setSearchStudent] = useState("")

    useEffect(() => {
        const reqGet = async () => {
            const response = await fetchApi.get("/register")
            const dataReq = response.data
            setData(dataReq)
        }

        reqGet()
    }, [])

    if(!data) {
        return <div className='loader'></div>
    }

    const deleteStudent = async(id) => {
        try {
            await fetchApi.delete(`/register/${id}`)

            setData(data.filter((student) => student._id !== id))
        } catch (error) {
            console.log("Error ao deletar:", error)
        }
    }

    const studentsFilter = data.filter((student) => student.name.toLowerCase().includes(searchStundent.toLowerCase()))

    return (
        <section className='list-container'>
            <div className='list'>
                <div className='list-title'>
                    <img src={pessoaAzul} alt="pessoas azul" />
                    <h3>Lista de Alunos</h3>
                </div>
                <input type="text" placeholder='Buscar por nome...' value={searchStundent} onChange={(e) => setSearchStudent(e.target.value)}/>

                {studentsFilter.length === 0 ? (<p className='information-noStudents'>Não há aluno cadastrado...</p>) : (
                    studentsFilter.map((information) => (
                        <div className='list-students' key={information._id}>
                            <h3>{information.name}</h3>
    
                            <div className='students-informations'>
                                <div className='informations'>
                                    <img src={email} alt="" />
                                    <p>{information.email}</p>
                                </div>
                                <div className='informations'>
                                    <img src={calendario} alt="" />
                                    <p>{information.age} anos</p>
                                </div>
                                <div className='informations'>
                                    <img src={rg} alt="" />
                                    <p>{information.rg}</p>
                                </div>
                                <div className='informations-serie'>
                                    <p>{information.serie}</p>
                                </div>
                            </div>
    
                            <div className='list-action'>
                                <button className='btn-edit'>
                                    <img src={editar} alt="editar" />
                                    <Link to={`/editAluno/${information._id}`}>Editar</Link>
                                </button>
                                <button className='btn-delete' onClick={() => deleteStudent(information._id)}>
                                    <img src={excluir} alt="excluir" />
                                    Excluir
                                </button>
                            </div>
    
                        </div>
                    ))
                )}
            </div>
        </section>
    )
}

export default ListAlunos