import React from 'react';

const Competencies = (props) => {
  const competencies = props.competencies;
  const keys = Object.keys(competencies);

  return (
    <div>
      <h1 className="title is-6">Core Competencies</h1>

      <ul className="unstyled-list">
        {keys.map((key, index) =>
          <li key={key}>
            <span id={key} className="button is-primary is-small is-outlined" onClick={props.addEntry}>+</span>            
            &nbsp;&nbsp;{key}&nbsp;&nbsp;
            <span className="tag is-rounded">{competencies[key]}</span>
          </li>
        )}
      </ul>
    </div>
  );
}

export default Competencies;
