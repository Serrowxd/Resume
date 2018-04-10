import React, { Component } from 'react';

import './App.css';

// Imports
import NavBar from './components/NavBar/NavBar';
import TypistText from './components/Typist/TypistText';

class App extends Component {
  render() {
    return (
      <div className="containerDiv">
        <NavBar />
        <TypistText />
      </div>
    );
  }
}

export default App;
