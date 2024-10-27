import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Pessoais from './components/cadastroDadosPessoais';
import Endereco from './components/CadastroEndereco';
import Senha from './components/CadastroSenha';
import Login from './components/Login';

function App() {
  const [telaAtual, setTelaAtual] = useState(1);

  const proximo = () => {
    setTelaAtual((prox) => prox + 1);
  };

  const login = () => {
    setTelaAtual(4);
  };

  return (
    <div className="App">
      <Header />
      {telaAtual === 1 && <Pessoais onNext={proximo} />}
      {telaAtual === 2 && <Endereco onNext={proximo} />}
      {telaAtual === 3 && <Senha onSave={login} />}
      {telaAtual === 4 && <Login />}
    </div>
  );
}

export default App;