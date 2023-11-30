// App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import BotonesToggle from './components/BotonesToggle/BotonesToggle';
import Cards from './components/Cards/Cards';
import Footer from './components/Footer/Footer';

const CLIENT_ID = '+++++++++++++++++++++++++++++';
const REDIRECT_URI = 'http://localhost:3001';
const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize';
const RESPONSE_TYPE = 'token';

function App() {
  const [token, setToken] = useState('');

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem('token');

    if (!token && hash) {
      token = hash
        .substring(1)
        .split('&')
        .find((elem) => elem.startsWith('access_token'))
        .split('=')[1];

      window.location.hash = '';
      window.localStorage.setItem('token', token);
    }

    setToken(token);
  }, []);

  const logout = () => {
    setToken('');
    window.localStorage.removeItem('token');
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Spotify React</h1>
        {!token ? (
          <a
            href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
          >
            Login to Spotify
          </a>
        ) : (
          <button onClick={logout}>Logout</button>
        )}
      </header>

      <Navbar />
      <BotonesToggle />
      <Cards />

      <Footer />
    </div>
  );
}

export default App;
