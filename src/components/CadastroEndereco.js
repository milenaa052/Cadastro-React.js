import React, { useState } from 'react';

const CadastroEndereco = ({ onNext }) => {
  const [formData, setFormData] = useState({
    cep: '',
    estado: '',
    cidade: '',
    rua: '',
    numero: ''
  });

  const [error, setError] = useState({
    cep: '',
    numero: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setError({ ...error, [name]: '' });

    if (name === "numero" && value < 0) {
      setError({ ...error, numero: "O número não deve ser negativo." });
      return;
    }

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const buscarCep = async () => {
    if (formData.cep.length !== 8) {
      setError({ ...error, cep: "O CEP deve ter 8 dígitos." });
      return;
    }
    
    const url = `https://viacep.com.br/ws/${formData.cep}/json/`;
    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.erro) {
        setError({ ...error, cep: "CEP não encontrado!" });
        return;
      }

      setFormData({
        ...formData,
        rua: data.logradouro || '',
        cidade: data.localidade || '',
        estado: data.uf || ''
      });
    } catch (error) {
      setError({ ...error, cep: "Erro ao buscar o CEP." });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if(formData.cep === '') {
      setError({ ...error, cep: "Preencha o seu CEP por favor." });
      return;
    } else if(formData.numero === '') {
      setError({ ...error, numero: "Preencha o número da sua casa/apartamento por favor." });
      return;
    }

    console.log('Formulário enviado:', formData);
    onNext(formData);
  };

  return (
    <div className="card">
      <div className="cardForm">
        <h2>Endereço</h2>

        <form onSubmit={handleSubmit} className="form">
          <div className="campos">
              <label htmlFor="cep" className="label">CEP</label>
              <input type="text" id="cep" name="cep" value={formData.cep} onChange={handleChange} onBlur={buscarCep}/>
              <a href="https://buscacepinter.correios.com.br/app/endereco/index.php" target="blank" class="buscaCep">Não sei meu cep</a>
              {error.cep && <span className="error" style={{float: 'right'}}>{error.cep}</span>}
          </div>
          <div className="campos">
              <label htmlFor="estado" className="label">Estado</label>
              <input type="text" id="estado" name="estado" value={formData.estado} onChange={handleChange} disabled/>
          </div>
          <div className="campos">
              <label htmlFor="cidade" className="label">Cidade</label>
              <input type="text" id="cidade" name="cidade" value={formData.cidade} onChange={handleChange} disabled/>
          </div>
          <div className="campos">
              <label htmlFor="rua" className="label">Rua</label>
              <input type="text" id="rua" name="rua" value={formData.rua} onChange={handleChange} disabled/>
          </div>
          <div className="campos">
              <label htmlFor="numero" className="label">Número</label>
              <input type="text" id="numero" name="numero" value={formData.numero} onChange={handleChange} required/>
              {error.numero && <span className="error">{error.numero}</span>}
          </div>

          <div className='submit'>
            <a href="www.google.com" className="login">Fazer login</a>
            <button type="button" onClick={handleSubmit}>Próximo</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CadastroEndereco;