import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Pessoais from './components/cadastroDadosPessoais';
import Endereco from './components/CadastroEndereco';
import Senha from './components/CadastroSenha';
import Login from './components/Login';

function App() {
  const [telaAtual, setTelaAtual] = useState(1);
  const [dadosCompletos, setDadosCompletos] = useState({});

  const proximo = (dados) => {
    setDadosCompletos((prevDados) => ({ ...prevDados, ...dados }));
    setTelaAtual((prox) => prox + 1);
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
  
      const data = await response.text();
  
      if (response.ok) {
        console.log(data.message);
        setTelaAtual(4);
      } else {
        console.error("Erro ao salvar dados:", data.error);
      }
    } catch (error) {
      console.error("Erro ao salvar dados:", error);
    }
  };

  return (
    <div className="App">
      <Header />
      {telaAtual === 1 && <Pessoais onNext={proximo} />}
      {telaAtual === 2 && <Endereco onNext={proximo} />}
      {telaAtual === 3 && <Senha onSave={salvarDados} />}
      {telaAtual === 4 && <Login />}
    </div>
  );
}

export default App;