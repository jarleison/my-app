import React from 'react';
import './FormularioContacto.css';

const FormularioContacto = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para manejar el envío del formulario
    alert('¡Gracias por contactarnos!');
  };

  return (
    <div className="formulario-contacto">
      <h2>Contacto</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre" required />

        <label htmlFor="correo">Correo Electrónico:</label>
        <input type="email" id="correo" name="correo" required />

        <label htmlFor="mensaje">Mensaje:</label>
        <textarea id="mensaje" name="mensaje" rows="4" required></textarea>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default FormularioContacto;
