import React, { Component } from 'react';
import './App.css';

import Game from './parts/Game';
import InfoBar from './parts/InfoBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <InfoBar />
        <Game />
      </div>
    );
  }
}

export default App;
