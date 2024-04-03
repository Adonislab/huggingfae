// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css';

function Header() { 
  return (
    <header className="App-header">
      <nav>
        <ul className="navigation">
          <li>
            <Link to="/detection" activeClassName="active">PROGRAMME DE DETECTION DES OBJETS</Link>
          </li>
          <li>
            <Link to="/npl" activeClassName="active">PROGRAMME DE DETECTION DES EMOTIONS</Link>
          </li>
          <li>
            <Link to="/vision" activeClassName="active">PROGRAMME DE VISION INFORMATIQUE</Link>
          </li>
          <li>
            <Link to="/decoration" activeClassName="active">PROGRAMME DE DECORATION</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
