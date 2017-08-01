import React from 'react';

class Core extends React.Component {
  render() {
    const coreCompetencies = ['Communication', 'Decision Making', 'Leadership', 'Principles of Community', 'Problem Solving', 'Quality Improvement', 'Service Focus', 'Stewardship and Managing Resources', 'Strategic Planning', 'Teamwork', 'Managing People'];
    // const competencyList = coreCompetencies.map((comp) => <li>{comp}</li>);

    return (
      <div>
        <h2>Core Competencies</h2>

        <ul>
          {coreCompetencies.map((comp) => <li>{comp}</li>)}
        </ul>
      </div>
    );
  }
}

export default Core;
