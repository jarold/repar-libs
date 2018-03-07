import React from 'react';

const EntryType = props => {
  return (
    <div className="select">
      <select onChange={props.onTypeChange}>
        <option value="Select a type">Select a type</option>
        <option value="Job Function">Job Function</option>
        <option value="Goal">Goal</option>
        <option value="Achievement">Achievement</option>
      </select>
    </div>
  );
};

export default EntryType;
