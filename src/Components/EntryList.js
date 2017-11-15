import React from 'react';
import EntryItem from './EntryItem';

const EntryList = props => {
  return (
    <div>
      {props.entries.map((entry, index) => (
        <EntryItem key={index} entry={entry} updateCount={props.updateCount} />
      ))}
    </div>
  );
};

export default EntryList;
