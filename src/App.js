import React, { Component } from 'react';
import './App.css';
import CompetencyCounter from './Components/CompetencyCounter';
import EntryList from './Components/EntryList';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      entries: [
        {
          type: 'Select a type',
          description: '[Description]',
        }
      ],
      competencies: {
        Communication: 0,
        'Decision Making': 0,
        Leadership: 0,
        'Principles of Community': 0,
        'Problem Solving': 0,
        'Quality Improvement': 0,
        'Service Focus': 0,
        'Stewardship and Managing Resources': 0,
        'Strategic Planning': 0,
        Teamwork: 0,
        'Managing People': 0
      }
    };

    this.addEntry = this.addEntry.bind(this);
    this.updateCount = this.updateCount.bind(this);
  }

  addEntry() {
    const newEntry = {
      type: 'Select a type',
      description: 'Description'
    }

    const newEntries = [...this.state.entries, newEntry]

    this.setState({
      entries: newEntries,
    });
  }

  updateCount(id) {
    let competencies = Object.assign({}, this.state.competencies);
    competencies[id] += 1;
    this.setState({ competencies });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2 className="title is-4">reparLibs</h2>
        </div>

        <div className="columns">
          <div className="column is-one-quarter">
            <CompetencyCounter
              competencies={this.state.competencies}
              addEntry={this.addEntry}
            />
          </div>
          <div className="column is-three-quarters">
            <EntryList
              entries={this.state.entries}
              updateCount={this.updateCount}
            />
            <button className="button is-fullwidth" onClick={this.addEntry}>Add Entry</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
