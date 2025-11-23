import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Integrantes from './routes/Integrantes/index.tsx'; 
import Sobre from './routes/Sobre/index.tsx';
import Home from './routes/Home/index.tsx';
import Faq from './routes/FAQ/index.tsx';
import Error from './routes/Error/index.tsx';
import Contato from './routes/Contato/index.tsx';
import Login from './routes/Login/index.tsx';
import Cadastro from './routes/Cadastro/index.tsx';
import Perfil from './routes/Perfil/index.tsx';

const router = createBrowserRouter([
  {
    path: "/", 
    element: <App/>, 
    errorElement: <Error/>,
    children: [
      {path: "/", element: <Home/>},
      {path: "/integrantes", element: <Integrantes/>},
      {path: "/faq", element: <Faq/>},
      {path: "/faq/:id", element: <Faq/>}, 
      {path: "/contato", element: <Contato/>},
      {path: "/sobre", element: <Sobre/>},
      {path: "/login", element: <Login/>},
      {path: "/cadastro", element: <Cadastro/>},
      {path: "/perfil", element: <Perfil/>},
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)