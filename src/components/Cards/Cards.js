// Cards.js
import React from 'react';
import './Cards.css';

const Cards = () => {
  return (
    <div className="cards-container">
      <div className="card">
        <img src="img/imagen1.jpg" alt="Imagen 1" />
      </div>
      <div className="card">
        <img src="img/imagen2.jpg" alt="Imagen 2" />
      </div>
      <div className="card">
        <img src="img/imagen3.jpg" alt="Imagen 3" />
      </div>
    </div>
  );
};

export default Cards;
