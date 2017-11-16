import React from 'react';

const CompetencySelector = props => {
  const competencies = {
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
  const keys = Object.keys(competencies);

  return (
    <div>
      <p>Demonstrated Competencies</p>
      <div className="tags">
        {keys.map((key, index) => (
          <span key={"tag"+index} className="tag is-rounded" onClick={props.addComment}>
            {key}
          </span>
        ))}
      </div>
    </div>
  );
};

export default CompetencySelector;
