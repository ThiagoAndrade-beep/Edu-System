import React, { useEffect, useState } from 'react'
import bonecoAzul from "../assets/boneco-azul.png"
import bonecoBranco from "../assets/boneco-branco.png"
import './pagePortalStudent.css'
import { Link } from 'react-router'
import fetchApi from '../axios/config'

const PagePortalStudent = () => {
    const [data, setData] = useState(null)
    const [searchStundent, setSearchStudent] = useState("")

    useEffect(() => {
        const reqGet = async () => {
            const response = await fetchApi.get("/register")
            const data = response.data
            setData(data)
        }

        reqGet()
    }, [])

    if (!data) {
        return <div className='loader'></div>
    }

    const filterStudent = data.filter((student) => student.name.toLowerCase().includes(searchStundent.toLowerCase()))

    return (
        <main className='container'>
            <header className='headerPortalStudent-container'>
                <img src={bonecoAzul} alt="boneco azul" />
                <div className='headerPortalStudend-text'>
                    <h1>Portal do Estudante</h1>
                    <p>Selecione seu perfil abaixo para acessar suas informações acadêmicas</p>
                    <input type="text" placeholder='Buscar por nome...' value={searchStundent} onChange={(e) => setSearchStudent(e.target.value)} />
                </div>
            </header>
            <section className='card-students'>
                {filterStudent.length === 0 ? (<p className='informations-noStudents'>Nenhum Aluno Foi Encontrado...</p>) : (
                    filterStudent.map((student) => (
                        <div className='cards' key={student._id}>
                            <img src={bonecoBranco} alt="boneco branco" />
                            <h3>{student.name}</h3>
                            <span>Série: {student.serie}</span>
                            <p>{student.email}</p>
                            <button>
                                <Link to={`/viewStudent/${student._id}`}>Ver perfil completo</Link>
                            </button>
                        </div>
                    ))
                )}
            </section>
        </main>
    )
}

export default PagePortalStudent