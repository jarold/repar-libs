import React from 'react';
import { connect } from 'react-redux';

import { deleteEntry } from '../actions';
import EntryItem from './EntryItem';

const EntryList = props => {
  return (
    <div>
      {props.entries.map((entry) => (
        <EntryItem
          key={entry.id}
          entry={entry}
          updateCount={props.updateCount}
          onDeleteEntry={() => props.onDeleteEntry(entry.id)}
        />
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    entries: state.entries
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDeleteEntry: id => {
      dispatch(deleteEntry(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EntryList);
