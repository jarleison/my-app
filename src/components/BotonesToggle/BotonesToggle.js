// BotonesToggle.js
import React from 'react';
import './BotonesToggle.css';

const BotonesToggle = () => {
  const handleToggle = () => {
    const cardsContainer = document.querySelector(".cards-container");
    cardsContainer.classList.toggle("hidden");
  };

  const handleDarkMode = () => {
    const body = document.body;
    body.classList.toggle("dark-mode");
  };

  const handleOpenYouTube = () => {
    window.open("https://www.youtube.com", "_blank");
  };

  return (
    <div className="tgBtn">
      <div className="divBtn">
        <button className="toggleB" id="toggleButton" onClick={handleToggle}>
          Mostrar/Ocultar Imagenes
        </button>
      </div>
      <br />
      <div className="divBtn">
        <button className="toggleB" id="toggleButton2" onClick={handleDarkMode}>
          Modo Claro/Oscuro
        </button>
      </div>
      <br />
      <div className="divBtn">
        <button className="toggleB" id="openYT" onClick={handleOpenYouTube}>
          Ir a YouTube
        </button>
      </div>
    </div>
  );
};

export default BotonesToggle;
