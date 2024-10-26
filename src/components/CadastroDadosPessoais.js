import React, { useState } from 'react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    dataNasc: '',
    telefone: '',
    genero: ''
  });

  const [error, setError] = useState({
    dataNasc: '',
    telefone: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setError({ ...error, [name]: '' });

    if (name === 'dataNasc') {
      const hoje = new Date();
      const dataSelecionada = new Date(value);
      
      if (dataSelecionada > hoje) {
        setError({ ...error, dataNasc: "A data de nascimento não deve ser maior do que a data atual" });
        return;
      }
    }

    if (name === 'telefone') {
      let telFormat = value.replace(/\D/g, "");
      telFormat = telFormat.replace(/^(\d{2})(\d)/, "($1) $2");
      telFormat = telFormat.replace(/(\d{5})(\d)/, "$1-$2");
      telFormat = telFormat.slice(0, 15);

      setFormData({
        ...formData,
        [name]: telFormat
      });
      return;
    }

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.telefone.length !== 15) {
      setError({ ...error, telefone: "O telefone deve estar preenchido corretamente." });
      return;
    }

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
                {error.dataNasc && <span className="error">{error.dataNasc}</span>}
            </div>
            <div className="campos">
                <label htmlFor="telefone" className="label">Número de Telefone</label>
                <input type="tel" id="telefone" name="telefone" value={formData.telefone} onChange={handleChange} required placeholder="(99) 99999-9999"/>
                {error.telefone && <span className="error">{error.telefone}</span>}
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