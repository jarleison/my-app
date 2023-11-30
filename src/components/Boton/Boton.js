import React from 'react';

const Boton = ({ onClick, label }) => (
  <button onClick={onClick}>{label}</button>
);

export default Boton;