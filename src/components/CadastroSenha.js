import React, { useState } from 'react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    senha: '',
    confirme: '',
    termos: '',
  });

  const [showPassword, setShowPassword] = useState({
    senha: false,
    confirme: false,
  });

  const [error, setError] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const exibirSenha = (field) => {
    setShowPassword({
      ...showPassword,
      [field]: !showPassword[field],
    });
  };

  const validarSenha = (senha) => {
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(senha);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.senha !== formData.confirme) {
      setError('As senhas não coincidem.');
    } 

    else if (!validarSenha(formData.senha)) {
      setError(
        'A senha deve ter no mínimo 8 caracteres, letra maiúscula, minúscula, número e símbolo.'
      );
    } else {
      setError('');
      console.log('Formulário enviado:', formData);
    }
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="card">
      <div className="cardForm">
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
              {error && <span className="error-message">{error}</span>}
            </div>
          </div>

          <div className="check">
            <input type="checkbox" id="termos" name="termos" value={formData.termos} onChange={handleChange} required/>
            <label htmlFor="termos" className="label">
              Aceite os <span className="termos-link" onClick={openModal}>Termos de Serviços</span>
            </label>
          </div>

          <div className='submit'>
            <a href="www.google.com" className="login">Fazer login</a>
            <button type="submit">Salvar</button>
          </div>
        </form>
      </div>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <p>Termos de Serviços</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default RegistrationForm;