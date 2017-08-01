import React, { Component } from 'react';
import madlibs from './madlibs.png';
import './App.css';
import CoreComp from './Components/CoreComp';
import Entry from './Components/Entry';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={madlibs} alt='logo' />
          <h2>reparLibs</h2>
        </div>

        <div className="columns">
          <div className="column is-one-quarter">
            <CoreComp />
          </div>
          <div className="column">
            <Entry competency={'Communication'} />
          </div>
        </div>

      </div>
    );
  }
}

export default App;
