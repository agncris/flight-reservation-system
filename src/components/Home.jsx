import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleLogin = (role) => {
    localStorage.setItem('authToken', 'mockToken123');
    localStorage.setItem('userRole', role);
    navigate('/dashb');
  };

  return (
    <div className="text-center">
      <h2>Bienvenido al Sistema de Reservas</h2>
      <p>Inicia sesión como:</p>
      <button
        className="btn btn-primary mx-2"
        onClick={() => handleLogin('user')}
      >
        Usuario
      </button>
      <button
        className="btn btn-secondary mx-2"
        onClick={() => handleLogin('admin')}
      >
        Administrador
      </button>
    </div>
  );
};

export default Home;