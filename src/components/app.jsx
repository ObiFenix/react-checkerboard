import React from 'react';
import logo from '../img/logo.svg';
import CheckerBoard from './checkerBoard.jsx';
import '../css/App.css';


// ========================
// Class Controll Component
// ========================

export default function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img
          src={logo}
          className="App-logo"
          alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learning React
        </a>
      </header>

      <div className="container">
          <CheckerBoard />
      </div>
    </div>
  );
}
