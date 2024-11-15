import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { MaisProjetos } from './componentes/projetos/MaisProjetos/maisProjetos.jsx'

const router = createBrowserRouter([
  {
    path: "/Portfolio-",
    element: <App />,
  },
  {
    path: "/mais_projetos",
    element: <MaisProjetos />,
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
