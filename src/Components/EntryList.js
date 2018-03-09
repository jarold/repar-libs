import React from 'react';
import { connect } from 'react-redux';
import { addEntry } from '../actions/index';

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

const mapStateToProps = state => {
  return {
    entries: state.entries
  };
};

export default connect(mapStateToProps)(EntryList);
