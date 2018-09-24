import React, { Component } from 'react';
import './App.css';

import Game from './parts/Game';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Game />
      </div>
    );
  }
}

export default App;
