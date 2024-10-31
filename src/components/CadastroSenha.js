import React, { useState } from 'react';

const CadastroSenha = ({ onSave, onBack }) => {
  const [formData, setFormData] = useState({
    senha: '',
    confirme: '',
    termos: false
  });

  const [showPassword, setShowPassword] = useState({
    senha: false,
    confirme: false,
  });

  const [error, setError] = useState({
    confirme: '',
    termos: ''
  });

  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));

    if (name === 'senha' || name === 'confirme') setError('');
  };

  const exibirSenha = (field) => {
    setShowPassword((prevShowPassword) => ({
      ...prevShowPassword,
      [field]: !prevShowPassword[field]
    }));
  };

  const validarSenha = (senha) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(senha);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.senha !== formData.confirme) {
      setError((prevError) => ({ ...prevError, confirme: "As senhas não coincidem." }));
      return;
    } 

    if (!validarSenha(formData.senha)) {
      setError((prevError) => ({ ...prevError, confirme: "A senha deve ter no mínimo 8 caracteres, letra maiúscula, minúscula, número e símbolo." }));
      return;
    }

    if (!formData.termos) {
      setError((prevError) => ({ ...prevError, termos: "Você deve aceitar os termos de serviço." }));
      return; 
    }

    localStorage.removeItem('cadastroDadosPessoais');
    localStorage.removeItem('cadastroEndereco');

    onSave(formData);
  };

  return (
    <div className="card">
      <div className="cardForm">
        <button type="button" className="back-button" onClick={onBack}>
          <i className="fa-solid fa-arrow-left"></i>
        </button>

        <h2>Cadastrar</h2>

        <form onSubmit={handleSubmit} className="form">
          <div className="campos">
            <label htmlFor="senha" className="label">Senha</label>
            <div className="input-container">
              <input type={showPassword.senha ? 'text' : 'password'} id="senha" name="senha" value={formData.senha} onChange={handleChange} min={8} required/>
              <i className={`fa-solid ${showPassword.senha ? 'fa-eye-slash' : 'fa-eye'}`} onClick={() => exibirSenha('senha')} />
            </div>
          </div>

          <div className="campos">
            <label htmlFor="confirme" className="label">Confirme a sua senha</label>
            <div className="input-container">
              <input type={showPassword.confirme ? 'text' : 'password'} id="confirme" name="confirme" value={formData.confirme} onChange={handleChange} min={8} required/>
              <i className={`fa-solid ${showPassword.confirme ? 'fa-eye-slash' : 'fa-eye'}`} onClick={() => exibirSenha('confirme')} />
              {error.confirme && <span className="error">{error.confirme}</span>}
            </div>
          </div>

          <div className="check">
            <input type="checkbox" id="termos" name="termos" value={formData.termos} onChange={handleChange} required/>
            <label htmlFor="termos" className="label">
              <span className="termos-link" onClick={() => setShowModal(true)}>Aceite os Termos de Serviços</span>
            </label>
          </div>
          {error.termos && <span className="error">{error.termos}</span>}

          <div className='submit'>
            <a href="/login" className="login">Fazer login</a>
            <button type="submit" onClick={handleSubmit}>Salvar</button>
          </div>
        </form>
      </div>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setShowModal(false)}>&times;</span>
            <p>Termos de Serviços</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CadastroSenha;