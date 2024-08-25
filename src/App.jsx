import { BrowserRouter, Route, Routes } from "react-router-dom"
import axios from 'axios';
import Home from "./pages/Home"
import Pagina404 from "./pages/404"
import CadastroPsicologo from "./pages/Cadastro"
import PrincipalCliente from "./pages/PrincipalCliente"

export const http = axios.create({
  baseURL: 'https://api-mypeace.vercel.app'
});

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="*" element={<Pagina404 />}/>
        <Route path="/cadastroPsicologo" element={<CadastroPsicologo />} />
        <Route path='/principalCliente' element={<PrincipalCliente />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
