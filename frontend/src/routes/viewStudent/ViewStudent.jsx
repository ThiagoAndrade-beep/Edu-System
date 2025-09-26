import React, { useEffect, useState } from 'react'
import NavPortalStudent from '../../components/NavPortalStudent'
import voltar from "../../assets/de-volta.png"
import bonecoBranco from "../../assets/boneco-branco.png"
import bonecoAzul from "../../assets/boneco-azul.png"
import email from "../../assets/email.png"
import rg from "../../assets/cartao-de-identidade.png"
import calendario from "../../assets/calendario.png"
import capelo from "../../assets/capelo.png"
import capeloCinza from "../../assets/capelo-cinza.png"
import localizacao from "../../assets/localizacao.png"
import relogio from "../../assets/relogio.png"
import './viewStudent.css'
import { Link, useParams } from 'react-router'
import fetchApi from '../../axios/config'

const ViewStudent = () => {

    const [data, setData] = useState(null)
    const { id } = useParams()

    useEffect(() => {
        const reqGet = async () => {
            const response = await fetchApi.get(`/register/${id}`)
            const data = response.data
            console.log(data)

            setData(data)
        }

        reqGet()
    }, [])

    if (!data) {
        return <div className='loader'></div>
    }

    return (
        <main>
            <nav>
                <NavPortalStudent />
            </nav>

            <section className='section-content-view'>
                <button className='btn-back'>
                    <img src={voltar} alt="seta voltar" />
                    <Link to="/perfilAluno">Voltar</Link>
                </button>

                <h2>Perfil de: {data.name}</h2>
            </section>

            <section className='section-information-view'>
                <div className='information-student-view'>

                    {/* titulo do perfil */}
                    <div className='student-header-view'>
                        <img src={bonecoBranco} alt="boneco branco" />
                        <h2>{data.name}</h2>
                        <span>Série: {data.serie}</span>
                    </div>

                    {/* infos pessoas + academicas */}
                    <div className='information-view'>
                        
                        <div className='info-block-view'> {/* column */}
                            <div className='block-title-view'>
                                <img src={bonecoAzul} alt="boneco azul" />
                                <h3>Informações Pessoais</h3>
                            </div>

                            <div className='info-list-view'>
                                <div className='info-card-view'>
                                    <img src={email} alt="email"/>
                                    <div className='content-view'>
                                        <p>Email</p>
                                        <span>{data.email}</span>
                                    </div>
                                </div>

                                <div className='info-card-view'>
                                    <img src={rg} alt="rg" />
                                    <div className='content-view'>
                                        <p>RG</p>
                                        <span>{data.rg}</span>
                                    </div>
                                </div>

                                <div className='info-card-view'>
                                    <img src={calendario} alt="calendario" />
                                    <div className='content-view'>
                                        <p>Idade</p>
                                        <span>{data.age}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='info-block-view'>
                            <div className='block-title-view'>
                                <img src={capelo} alt="capelo azul" />
                                <h3>Informações Acadêmicas</h3>
                            </div>

                            <div className='info-list-view'>
                                <div className='info-card-view'>
                                    <img src={capeloCinza} alt="capelo cinza" />
                                    <div className='content-view'>
                                        <p>Série</p>
                                        <span>{data.serie}</span>
                                    </div>
                                </div>

                                <div className='info-card-view'>
                                    <img src={localizacao} alt="localizacao" />
                                    <div className='content-view'>
                                        <p>Sala</p>
                                        <span>{data.serie}</span>
                                    </div>
                                </div>

                                <div className='info-card-view'>
                                    <img src={rg} alt="rg" />
                                    <div className='content-view'>
                                        <p>ID do aluno</p>
                                        <span>{data._id}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                    </div>

                    <footer className='footer'>
                        <div className='footer-title'>
                            <img src={capelo} alt="capelo" />
                            <h3>Status Acadêmico</h3>
                        </div>
                        <p>Aluno regularmente matriculado no {data.serie}. Matrícula ativa desde 16/16/2016.</p>
                    </footer>
                </div>
            </section>
        </main>
    )
}

export default ViewStudent