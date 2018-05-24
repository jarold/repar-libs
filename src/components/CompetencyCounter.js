import React from 'react';
import { connect } from 'react-redux';

const CompetencyCounter = props => {
  let competencyCount = {
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
  };

  if (props.entries) {
    // loop through entries, each entries have comments, each comment has a competency to count
    props.entries.forEach(entry => {
      entry.comments.forEach(comment => {
        competencyCount[comment.competency] += 1;
      });
    });
  }

  const keys = Object.keys(competencyCount);

  return (
    <div className="fixed">
      <h1 className="title is-6">Core Competencies</h1>

      <ul className="unstyled-list">
        {keys.map((key, index) => (
          <li key={key}>
            <div className="tags has-addons">
              <span className="tag">{key}</span>
              <span
                className={
                  'tag ' + (competencyCount[key] > 1 ? 'is-success' : '')
                }
              >
                {competencyCount[key]}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    entries: state.entries
  };
};

export default connect(mapStateToProps)(CompetencyCounter);
