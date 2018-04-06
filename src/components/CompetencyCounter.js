import React from 'react';
import { connect } from 'react-redux';

const CompetencyCounter = props => {
  const competencies = props.competencies;
  const keys = Object.keys(competencies);

  return (
    <div className="fixed">
      <h1 className="title is-6">Core Competencies</h1>

      <ul className="unstyled-list">
        {keys.map((key, index) => (
          <li key={key}>
            <div className="tags has-addons">
              <span className="tag">{key}</span>
              <span
                className={'tag ' + (competencies[key] > 1 ? 'is-success' : '')}
              >
                {competencies[key]}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = state => {
  return { competencies: state.counter };
};

export default connect(mapStateToProps)(CompetencyCounter);
