// App.js
import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import BotonesToggle from './components/BotonesToggle/BotonesToggle';
import Cards from './components/Cards/Cards';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <BotonesToggle />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
