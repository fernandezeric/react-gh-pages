import React from 'react'
import jonimott from './jonimott.svg'
import './css/App.css'

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={jonimott} className="App-logo" alt="logo" />
        <p>
          Template react-gh-pages.
        </p>
        <a
          className="App-link"
          href="https://github.com/fernandezeric"
          target="_blank"
          rel="noopener noreferrer"
        >
          Jonimott
        </a>
      </header>
    </div>
  )
}

export default App;
