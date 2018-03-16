import React, { Component } from 'react';

import NavBar from "./components/NavBar";
import Jumbo from "./components/Jumbo";


class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Jumbo />
      </div>
    );
  }
}

export default App;