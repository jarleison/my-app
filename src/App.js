// App.js
import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import BotonesToggle from './components/BotonesToggle/BotonesToggle';
import Cards from './components/Cards/Cards';
import Footer from './components/Footer/Footer';

function App() {
  const [isHidden, setIsHidden] = useState(false);

  return (
    <div className="App">
      <Navbar />
      <BotonesToggle />
      <Cards isHidden={isHidden} />
      <Footer />
    </div>
  );
}

export default App;