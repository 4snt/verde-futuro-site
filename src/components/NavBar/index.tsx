import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logonavbar.svg';
import './styles.css';

const NavBar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo Verde Futuro" style={{ height: '50px' }} />
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/terms">Termos de Uso</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
