import React from 'react';
import './App.css';
import Header from './components/Header';
import Pessoais from './components/CadastroDadosPessoais';
import Endereco from './components/CadastroEndereco';
import Senha from './components/CadastroSenha';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Header />
      <Pessoais />
      <Endereco />
      <Senha />
      <Login />
    </div>
  );
}

export default App;