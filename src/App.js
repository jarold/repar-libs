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
          competency: '"Competency"',
          behavioralIndicator: '"Behavioral Indicator"',
          example: '"Example"',
          impact: '"Impact"',
        },
      ],
      competencies: {
          'Communication': 0,
          'Decision Making': 0,
          'Leadership': 0,
          'Principles of Community': 0,
          'Problem Solving': 0,
          'Quality Improvement': 0,
          'Service Focus': 0,
          'Stewardship and Managing Resources': 0,
          'Strategic Planning': 0,
          'Teamwork': 0,
          'Managing People': 0,
      }
    };

    this.addEntry = this.addEntry.bind(this);
  }

  addEntry(event) {
    const competency = event.target.id;

    this.setState((prevState) => ({
      entries: prevState.entries.concat({
        competency,
        behavioralIndicator: '__________',
        example: '__________',
        impact: '__________',
      }),
    }));

    let competencies = Object.assign({}, this.state.competencies);
    competencies[competency] += 1;
    this.setState({competencies});
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2 className="title is-4 has-text-white">reparLibs</h2>
        </div>

        <div className="columns">
          <div className="column is-one-quarter">
            <CompetencyCounter competencies={this.state.competencies} addEntry={this.addEntry} />
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