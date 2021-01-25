import randomColor from 'randomcolor';
import React, { useState } from 'react';
//import App from './App';
import './App.css';
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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

function BodyToColor() {
  const [color, setColor] = useState('');

  return (
    <div>
      <p>This text should be colored every time loaded.</p>
      <button onClick={() => setColor(randomColor())}>Change color</button>
    </div>
  );
}

export default App;
