import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import CompetencyCounter from './components/CompetencyCounter';
import EntryList from './components/EntryList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <section className="section">
          <div className="columns">
            <div className="column is-one-quarter">
              <CompetencyCounter />
            </div>
            <div className="column is-three-quarters">
              <EntryList />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
