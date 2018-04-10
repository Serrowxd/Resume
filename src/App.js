import React, { Component } from 'react';

import './App.css';

// Imports
import NavBar from './components/NavBar/NavBar';
import TypistText from './components/Typist/TypistText';
import Filler from './components/Filler';
import LowerHead from './components/LowerHeader/LowerHeader';
import UpperBody from './components/UpperBody/UpperBody';
import Body from './components/Body/Body';

class App extends Component {
  render() {
    return (
      <div>
        <div className="containerDiv">
          <NavBar />
          <TypistText />
        </div>
        <div className="lowerHeadDiv">
          <LowerHead />
        </div>
        <div className="upperBodyDiv">
          <UpperBody />
        </div>
        <div>
          <Body />
        </div>
        <div>
          <Filler />
          <Filler />
          <Filler />
          <Filler />
        </div>
      </div>
    );
  }
}

export default App;
