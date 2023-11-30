import React from 'react';
import './Productos.css';

const Productos = () => {
  const productos = [
    { id: 1, nombre: 'Pastel de Chocolate', precio: '$20.00' },
    { id: 2, nombre: 'Galletas de Vainilla', precio: '$10.00' },
    { id: 3, nombre: 'Cupcakes de Fresa', precio: '$15.00' },
    // Agrega más productos según sea necesario
  ];

  return (
    <div className="productos">
      <h2>Nuestros Productos</h2>
      <ul>
        {productos.map(producto => (
          <li key={producto.id}>
            <strong>{producto.nombre}</strong> - {producto.precio}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Productos;
