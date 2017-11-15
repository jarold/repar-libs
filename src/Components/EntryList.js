import React from 'react';
import EntryItem from './EntryItem';

const EntryList = (props) => {
  return (
    <div>
      {props.entries.map((entry, index) => <EntryItem key={index} entry={entry} />)}
    </div>
  )
}

export default EntryList;