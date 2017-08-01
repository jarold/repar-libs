import React from 'react';
import Entry from './Entry';

const EntryList = (props) => {
  return (
    <div>
      {props.entries.map(entry => <Entry entry={entry} />)}
    </div>
  )
}

export default EntryList;