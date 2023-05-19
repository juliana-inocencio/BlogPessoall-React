import { useState } from 'react';
import Navbar from './components/estaticos/navbar/Navbar'
import Footer from './components/estaticos/footer/footer'
import Home from './paginas/home/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from "./paginas/login/Login"
import './App.css'
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';

function App() {
  return(
    <BrowserRouter>
    <Navbar />
    <div style={{ minHeight: '100vh' }}>
    <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/login" element={<Login />} />
    <Route path="/home" element={<Home />} />
    <Route path="/cadastrousuario" element={<CadastroUsuario />} /> 
    </Routes>
    </div>
    <Footer />
    </BrowserRouter>
    )
    
}

export default App
