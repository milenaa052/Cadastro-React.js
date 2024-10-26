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
    const { name, value } = e.target;

    if (name === "numero" && value < 0) {
      alert("O número não deve ser negativo");
      return;
    }

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const buscarCep = async () => {
    if (formData.cep.length !== 8) {
      alert("O CEP deve ter 8 dígitos");
      return;
    }
    
    const url = `https://viacep.com.br/ws/${formData.cep}/json/`;
    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.erro) {
        alert("CEP não encontrado!");
        return;
      }

      setFormData({
        
        rua: data.logradouro || '',
        cidade: data.localidade || '',
        estado: data.uf || ''
      });
    } catch (error) {
      console.error("Erro ao buscar o CEP:", error);
      alert("Erro ao buscar o CEP. Tente novamente.");
    }
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
              <input type="text" id="cep" name="cep" value={formData.cep} onChange={handleChange} onBlur={buscarCep} required/>
              <a href="https://buscacepinter.correios.com.br/app/endereco/index.php" target="blank" class="buscaCep">Não sei meu cep</a>
          </div>
          <div className="campos">
              <label htmlFor="estado" className="label">Estado</label>
              <input type="text" id="estado" name="estado" value={formData.estado} onChange={handleChange} required disabled/>
          </div>
          <div className="campos">
              <label htmlFor="cidade" className="label">Cidade</label>
              <input type="text" id="cidade" name="cidade" value={formData.cidade} onChange={handleChange} required disabled/>
          </div>
          <div className="campos">
              <label htmlFor="rua" className="label">Rua</label>
              <input type="text" id="rua" name="rua" value={formData.rua} onChange={handleChange} required disabled/>
          </div>
          <div className="campos">
              <label htmlFor="numero" className="label">Número</label>
              <input type="text" id="numero" name="numero" value={formData.numero} onChange={handleChange} required/>
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