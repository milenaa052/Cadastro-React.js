import React, { useState } from 'react';

const Login = ({ onLogin }) => {
  const [formData, setFormData] = useState({ email: '', senha: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      
      if (response.ok) {
        onLogin(data.token);
      } else {
        setError("Email e/ou senha inválidos.");
      }
    } catch {
      setError("Erro no servidor");
    }
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

          {error && <span className="error">{error}</span>}

          <div className='submit'>
            <a href="/" className="login">Criar Conta</a>
            <button type="submit">Entrar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;