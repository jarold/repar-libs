import React from 'react';
import { connect } from 'react-redux';

import { deleteEntry, updateCount, addComment } from '../actions';
import EntryItem from './EntryItem';

const EntryList = props => {
  return (
    <div>
      {props.entries.map((entry, index) => (
        <EntryItem
          key={entry.id}
          entry={entry}
          onUpdateCount={compName => props.onUpdateCount(compName)}
          onDeleteEntry={() => props.onDeleteEntry(entry.id)}
          onAddComment={compName => props.onAddComment(compName, index)}
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
    },
    onAddComment: (compName, idx) => {
      dispatch(addComment(compName, idx));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EntryList);
