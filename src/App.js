import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Pessoais from './components/CadastroDadosPessoais';
import Endereco from './components/CadastroEndereco';
import Senha from './components/CadastroSenha';
import Login from './components/Login';
import Home from './components/Home';

function App() {
  const [telaAtual, setTelaAtual] = useState(1);
  const [dadosCompletos, setDadosCompletos] = useState({});
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem('user');
    setIsAuthenticated(!!user);
  }, []);

  const handleLogin = (user) => {
    localStorage.setItem('user', user);
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setIsAuthenticated(false);
  };

  const proximo = (dados) => {
    setDadosCompletos((prevDados) => ({ ...prevDados, ...dados }));
    setTelaAtual((prox) => prox + 1);
  };

  const voltar = () => {
    setTelaAtual((back) => back - 1);
  };

  const salvarDados = async (dados) => {
    const dadosFinais = { ...dadosCompletos, ...dados };
    try {
      const response = await fetch('http://localhost:3001/salvarDados', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dadosFinais),
      });
  
      if (response.ok) setTelaAtual(4);
    } catch (error) {
      console.error("Erro ao salvar dados:", error);
    }
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route
            path="/" element={ isAuthenticated ? <Navigate to="/home" replace /> : (
                <div>
                  {telaAtual === 1 && <Pessoais onNext={proximo} />}
                  {telaAtual === 2 && <Endereco onNext={proximo} onBack={voltar} />}
                  {telaAtual === 3 && <Senha onSave={salvarDados} onBack={voltar} />}
                  {telaAtual === 4 && <Login onLogin={handleLogin} />}
                </div>
              )
            }
          />
          <Route path="/home" element={isAuthenticated ? <Home onLogout={handleLogout} /> : <Navigate to="/" replace />} />

          <Route path="/login" element={isAuthenticated ? <Navigate to="/home" replace /> : <Login onLogin={handleLogin} />} />

          <Route path="*" element={<Navigate to={isAuthenticated ? "/home" : "/"} replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;