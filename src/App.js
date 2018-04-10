import React, { Component } from 'react';

import './App.css';

// Imports
import NavBar from './components/NavBar/NavBar';
import TypistText from './components/Typist/TypistText';
import Filler from './components/Filler';

class App extends Component {
  render() {
    return (
      <div className="containerDiv">
        <NavBar />
        <TypistText />
        <Filler />
        <Filler />
        <Filler />
        <Filler />
        <Filler />
        <Filler />
        <Filler />
      </div>
    );
  }
}

export default App;
