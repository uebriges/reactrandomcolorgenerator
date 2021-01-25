import randomColor from 'randomcolor';
import React, { useState } from 'react';
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

export function PToColor() {
  const [color, setColor] = useState('');
  const [hue, setHue] = useState('');
  const [luminosity, setLuminosity] = useState('');

  function updateColor() {
    return setColor(
      randomColor({
        luminosity: luminosity.target.value,
        hue: hue.target.value,
      }),
    );
  }

  return (
    <div>
      <p
        style={{ color: color, transition: 'color 1s', background: '#4287f5' }}
      >
        This text has color : {color}.
      </p>
      <label htmlFor="hue">Hue: </label>
      <input type="text" id="hue" onChange={setHue} />
      <br />
      <label htmlFor="luminosity">Luminosity: </label>
      <input type="text" id="luminosity" onChange={setLuminosity} />
      <button onClick={updateColor}>Change color</button>
    </div>
  );
}

export default App;
