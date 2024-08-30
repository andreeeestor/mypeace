import { BrowserRouter, Route, Routes } from "react-router-dom"
import axios from 'axios';
import Home from "./pages/Home"
import Pagina404 from "./pages/404"
import CadastroPsicologo from "./pages/Cadastro"
import PrincipalCliente from "./pages/PrincipalCliente"
import Login from "./pages/Login";
import PrincipalPsico from "./pages/PrincipalPsico";
import ListaPaciente from "./pages/ListaPaciente";

export const http = axios.create({
  baseURL: 'https://api-mypeace.vercel.app'
});

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="*" element={<Pagina404 />}/>
        <Route path="/login" element={<Login />} />
        <Route path="/principalPsico" element={<PrincipalPsico />} />
        <Route path='/principalCliente' element={<PrincipalCliente />} />
        <Route path="/cadastroPsicologo" element={<CadastroPsicologo />} />
        <Route path="/principalPsico/listapaciente" element={<ListaPaciente />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
