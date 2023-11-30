// Cards.js
import React from 'react';
import './Cards.css';

const Cards = ({ show }) => {
  return (
    <div className={`cards-container ${show ? '' : 'hidden'}`}>
      <div className="card">
        <img src="/img/imagen1.jpg" alt="Imagen 1" />
      </div>
      {/* Otras tarjetas aquí */}
    </div>
  );
};

export default Cards;
