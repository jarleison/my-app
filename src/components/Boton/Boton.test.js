import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Boton from './Boton';

test('Renderizar el componente Boton correctamente', () => {
  const { getByText } = render(<Boton label="Haz clic" />);
  expect(getByText('Haz clic')).toBeInTheDocument();
});

test('Invocar la función onClick al hacer clic en el botón', () => {
  const mockOnClick = jest.fn();
  const { getByText } = render(<Boton label="Haz clic" onClick={mockOnClick} />);
  
  fireEvent.click(getByText('Haz clic'));
  expect(mockOnClick).toHaveBeenCalled();
});