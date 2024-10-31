import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = ({ onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate('/login');
  };

  return (
    <div>
      <h1>Bem-vindo a página inicial!</h1>
      <button className='sair' onClick={handleLogout}>Sair</button>
    </div>
  );
};

export default Home;