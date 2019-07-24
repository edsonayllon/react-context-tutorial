import React, { useContext } from 'react';
import logo from './logo.svg';
import './App.css';
import { ThemeContext, themes } from './contexts/ThemeContext';

function App() {
  return (
    <ThemeContext.Provider value={themes.dark}>
      <Child />
    </ThemeContext.Provider>
  );
}

function Child() {
  const theme = useContext(ThemeContext);
  console.log(theme);
  console.log(ThemeContext);
  return (
    <div className="App">
      <header className="App-header" style={{backgroundColor: theme.background}}>
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
  )
}

export default App;
