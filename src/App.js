import React, { Component } from 'react';
import madlibs from './madlibs.png';
import './App.css';
import Core from './Components/Core';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={madlibs} alt='logo' />
          <h2>reparLibs</h2>
        </div>

        <CoreComp />
      </div>
    );
  }
}

export default App;
