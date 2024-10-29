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
    setError((prevError) => ({ ...prevError, [name]: '' }));

    if (name === "numero" && value < 0) {
      setError((prevError) => ({ ...prevError, numero: "O número não deve ser negativo." }));
      return;
    }

    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const buscarCep = async () => {
    if (formData.cep.length !== 8) {
      setError((prevError) => ({ ...prevError, cep: "O CEP deve ter 8 dígitos." }));
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

      setFormData((prevData) => ({
        ...prevData,
        rua: data.logradouro || '',
        cidade: data.localidade || '',
        estado: data.uf || ''
      }));

    } catch (error) {
       setError((prevError) => ({ ...prevError, cep: "Erro ao buscar o CEP." }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!formData.cep) {
      setError((prevError) => ({ ...prevError, cep: "Preencha o seu CEP por favor." }));
      return;
    } 
    
    if(!formData.numero) {
      setError((prevError) => ({ ...prevError, numero: "Preencha o número da sua casa/apartamento por favor." }));
      return;
    }

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
            <a href="/login" className="login">Fazer login</a>
            <button type="submit" onClick={handleSubmit}>Próximo</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CadastroEndereco;