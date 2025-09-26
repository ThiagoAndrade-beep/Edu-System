import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Admin from './routes/painelAdmin/Admin.jsx'
import PerfilAluno from './routes/perfilAluno/PerfilAluno.jsx'
import Home from './routes/homePage/Home.jsx'
import ListAlunos from './routes/listarAlunos/ListAlunos.jsx'
import CadastrarAlunos from './routes/cadastrarAlunos/CadastrarAlunos.jsx'
import EditStudent from './routes/editPage/EditStudent.jsx'
import ViewStudent from './routes/viewStudent/ViewStudent.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
      children: [
          {
            path: "/",
            element: <Home />
          },

          {
            path: "painelAdmin",
            element: <Admin />,
              children: [
                {
                  path: "listaDeAlunos",
                  element: <ListAlunos />
                },
                {
                  path: "cadastrarAlunos",
                  element: <CadastrarAlunos />
                },
              ]
          },
          {
            path: "perfilAluno",
            element: <PerfilAluno />,
          },
          {
            path: "editAluno/:id",
            element: <EditStudent />
          },
          {
            path: "viewStudent/:id",
            element: <ViewStudent />
          }
      ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
