import React, { Component } from 'react';
import madlibs from './madlibs.png';
import './App.css';
import Competencies from './Components/Competencies';
import EntryList from './Components/EntryList';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      entries: [
        {
          competency: '"Competency"',
          behavioralIndicator: '"Behavioral Indicator"',
          example: '"Example"',
          impact: '"Impact"',
        },
      ],
    };

    this.addEntry = this.addEntry.bind(this);
  }

  addEntry(event) {
    const competency = event.target.id;

    this.setState((prevState) => {
      const newState = prevState.entries.push({
        competency,
        behavioralIndicator: '__________',
        example: '__________',
        impact: '__________',
      });

      return newState;
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={madlibs} alt="logo" />
          <h2 className="title is-4 has-text-white">reparLibs</h2>
        </div>

        <div className="columns">
          <div className="column is-one-quarter">
            <Competencies addEntry={this.addEntry} />
          </div>
          <div className="column">
            <EntryList entries={this.state.entries} />
          </div>
        </div>

      </div>
    );
  }
}

export default App;