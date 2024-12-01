import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logonavbar.svg';
import './styles.css';

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

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
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/terms">Termos de Uso</Link>
        </li>
        {/* Adicione mais links conforme necessário */}
      </ul>
    </nav>
  );
};

export default NavBar;
