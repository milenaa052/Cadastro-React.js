import React, { useState } from 'react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    dataNasc: '',
    telefone: '',
    genero: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulário enviado:', formData);
  };

  return (
    <div className="card">
      <div className="cardForm">
            <h2>Dados Pessoais</h2>

            <form onSubmit={handleSubmit} className="form">
            <div className="campos">
                <label htmlFor="nome" className="label">Nome</label>
                <input type="text" id="nome" name="nome" value={formData.nome} onChange={handleChange} required/>
            </div>
            <div className="campos">
                <label htmlFor="email" className="label">Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required/>
            </div>
            <div className="campos">
                <label htmlFor="dataNasc" className="label">Data de Nascimento</label>
                <input type="date" id="dataNasc" name="dataNasc" value={formData.dataNasc} onChange={handleChange} required/>
            </div>
            <div className="campos">
                <label htmlFor="telefone" className="label">Número de Telefone</label>
                <input type="tel" id="telefone" name="telefone" value={formData.telefone} onChange={handleChange} required/>
            </div>

            <div className="campos">
                <label htmlFor="genero" className="label">Gênero</label>
                <select id="genero" name="genero" value={formData.genero} onChange={handleChange} required> 
                <option value="">Selecione...</option>
                <option value="masculino">Masculino</option>
                <option value="feminino">Feminino</option>
                <option value="outro">Outro</option>
                <option value="prefiro-nao-dizer">Prefiro não dizer</option>
                </select>
            </div>

            <div className='submit'>
              <a href="www.google.com" className="login">Fazer login</a>
              <button type="submit">Próximo</button>
            </div>
            </form>
      </div>
    </div>
  );
};

export default RegistrationForm;