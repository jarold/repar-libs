import React from 'react';

class Competencies extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
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
  }

  render() {
    const competencies = this.state;
    const keys = Object.keys(competencies);

    return (
      <div>
        <h1 className="title is-6">Core Competencies</h1>

        <ul className="unstyled-list">
          {keys.map((key, index) =>
            <li key={key}>
              <span id={key} className="button is-primary is-small is-outlined" onClick={this.props.addEntry}>+</span>            
              &nbsp;&nbsp;{key}&nbsp;&nbsp;
              <span className="tag is-rounded">{competencies[key]}</span>
            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default Competencies;
