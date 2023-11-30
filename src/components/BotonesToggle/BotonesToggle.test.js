// BotonesToggle.js
import React, { useState } from 'react';
import './BotonesToggle.css';

const BotonesToggle = () => {
  const [isHidden, setIsHidden] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggle = () => {
    setIsHidden((prevIsHidden) => !prevIsHidden);
  };

  const handleDarkMode = () => {
    setIsDarkMode((prevIsDarkMode) => !prevIsDarkMode);
  };

  const handleOpenYouTube = () => {
    window.open("https://www.youtube.com", "_blank");
  };

  const tgBtnClass = isDarkMode ? "dark-mode" : "";

  return (
    <div className={`tgBtn ${tgBtnClass}`}>
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
