import React, { useContext, useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import GlobalState from './contexts/GlobalState';

function App() {
  const [state, setState] = useState({});
  return (
    <GlobalState.Provider value={[state, setState]}>
      <Child />
    </GlobalState.Provider>
  );
}

function Child() {
  const [state, setState] = useContext(GlobalState);

  useEffect(() => {
    setState(state => ({...state, address: "dsfsdfsdfsdf"}))
  }, []);

  console.log(state);
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
        <br />

        <p>Open console to see global state object</p>
      </header>
    </div>
  )
}

export default App;
