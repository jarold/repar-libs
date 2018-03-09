import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import CompetencyCounter from './components/CompetencyCounter';
import EntryList from './components/EntryList';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
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

    this.updateCount = this.updateCount.bind(this);
  }

  updateCount(id) {
    let competencies = Object.assign({}, this.state.competencies);
    competencies[id] += 1;
    this.setState({ competencies });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <section className="section">
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
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
