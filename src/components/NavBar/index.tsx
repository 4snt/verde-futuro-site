import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logonavbar.svg';
import './styles.css';

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    // Função para lidar com o redimensionamento da tela
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };

    // Adicionar event listener para redimensionamento da janela
    window.addEventListener('resize', handleResize);

    // Limpar o event listener ao desmontar o componente
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo Verde Futuro" />
      </div>
      <div className="navbar-toggle" onClick={toggleMenu}>
        {isOpen ? '✖' : '☰'} {/* Ícone de menu hamburger */}
      </div>
      <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <li>
          <Link to="/" onClick={closeMenu}>Home</Link>
        </li>
        <li>
          <Link to="/registerform" onClick={closeMenu}>Registro no app</Link>
        </li>
        <li>
          <Link to="/terms" onClick={closeMenu}>Termos de Uso</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
