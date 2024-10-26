import React, { useState } from 'react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    cep: '',
    estado: '',
    cidade: '',
    rua: '',
    numero: ''
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
            <h2>Endereço</h2>

            <form onSubmit={handleSubmit} className="form">
            <div className="campos">
                <label htmlFor="cep" className="label">CEP</label>
                <input type="number" id="cep" name="cep" value={formData.cep} onChange={handleChange} required/>
            </div>
            <div className="campos">
                <label htmlFor="estado" className="label">Estado</label>
                <input type="text" id="estado" name="estado" value={formData.estado} onChange={handleChange} required/>
            </div>
            <div className="campos">
                <label htmlFor="cidade" className="label">Cidade</label>
                <input type="text" id="cidade" name="cidade" value={formData.cidade} onChange={handleChange} required/>
            </div>
            <div className="campos">
                <label htmlFor="rua" className="label">Rua</label>
                <input type="text" id="rua" name="rua" value={formData.rua} onChange={handleChange} required/>
            </div>
            <div className="campos">
                <label htmlFor="numero" className="label">Número</label>
                <input type="number" id="numero" name="numero" value={formData.numero} onChange={handleChange} required/>
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