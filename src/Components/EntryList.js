import React from 'react';
import { connect } from 'react-redux';

import { deleteEntry, updateCount } from '../actions';
import EntryItem from './EntryItem';

const EntryList = props => {
  return (
    <div>
      {props.entries.map(entry => (
        <EntryItem
          key={entry.id}
          entry={entry}
          onUpdateCount={compName => props.onUpdateCount(compName)}
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
    },
    onUpdateCount: compName => {
      dispatch(updateCount(compName));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EntryList);
