// Navbar.js
import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <img src="../../img/logo.png" alt="Pastelería Delicia" />
        </div>
        <ul className="nav-links">
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#productos">Productos</a></li>
          <li><a href="#nosotros">Nosotros</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
