import React from 'react';
import './App.css';
import Productos from './components/Productos/Productos';
import FormularioContacto from './components/FormularioContacto/FormularioContacto';
import Navbar from './components/Navbar/Navbar'; // Asegúrate de tener la ruta correcta


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Pastelería Delicia</h1>
        <Navbar />
      </header>

      <Productos />
      <FormularioContacto />
    </div>
  );
}

export default App;
