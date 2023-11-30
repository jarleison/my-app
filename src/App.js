import React from 'react';
import logo from './logo.svg';
import './App.css';
import Boton from './cBoton/Boton';

function App() {
  const handleClick = () => {
    alert('Haz hecho clic en el botón');
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Mi Aplicación React</h1>
        <Boton label="Haz clic" onClick={handleClick} />
        {/* Otros componentes aquí */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
