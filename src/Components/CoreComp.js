import React from 'react';

class CoreComp extends React.Component {
  render() {
    const coreCompetencies = ['Communication', 'Decision Making', 'Leadership', 'Principles of Community', 'Problem Solving', 'Quality Improvement', 'Service Focus', 'Stewardship and Managing Resources', 'Strategic Planning', 'Teamwork', 'Managing People'];

    return (
      <div>
        <h2 className="title is-4">Core Competencies</h2>

        <ul className="unstyled-list">
          {coreCompetencies.map((comp) =>
            <li>
              <span className="button is-primary is-small is-outlined">+</span>            
              &nbsp;&nbsp;{comp}&nbsp;&nbsp;
              <span className="tag is-rounded">0</span>
            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default CoreComp;
