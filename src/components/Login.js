import React, { useState } from 'react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    senha: '',
    confirme: '',
    termos: '',
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
            <h2>Login</h2>

            <form onSubmit={handleSubmit} className="form">
            <div className="campos">
                <label htmlFor="email" className="label">Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required/>
            </div>
            <div className="campos">
                <label htmlFor="senha" className="label">Senha</label>
                <input type="password" id="senha" name="senha" value={formData.senha} onChange={handleChange} required/>
                <a href="www.google.com" className="recuperarSenha">Esqueci minha senha</a>
            </div>

            <div className='submit'>
              <a href="www.google.com" className="login">Criar Conta</a>
              <button type="submit">Entrar</button>
            </div>
            </form>
      </div>
    </div>
  );
};

export default RegistrationForm;