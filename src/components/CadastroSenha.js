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
            <h2>Cadastrar</h2>

            <form onSubmit={handleSubmit} className="form">
            <div className="campos">
                <label htmlFor="senha" className="label">Senha</label>
                <input type="password" id="senha" name="senha" value={formData.senha} onChange={handleChange} required/>
            </div>
            <div className="campos">
                <label htmlFor="confirme" className="label">Confirme a sua senha</label>
                <input type="password" id="confirme" name="confirme" value={formData.confirme} onChange={handleChange} required/>
            </div>
            <div className="check">
                <input type="checkbox" id="termos" name="termos" value={formData.termos} onChange={handleChange} required/>
                <label htmlFor="termos" className="label">Aceite os Termos de Serviços</label>
            </div>

            <div className='submit'>
              <a href="www.google.com" className="login">Fazer login</a>
              <button type="submit">Salvar</button>
            </div>
            </form>
      </div>
    </div>
  );
};

export default RegistrationForm;