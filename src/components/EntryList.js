import React from 'react';
import { connect } from 'react-redux';

import {
  deleteEntry,
  updateEntryType,
  updateEntryDescription,
  updateCount,
  addComment
} from '../actions';
import Entry from './Entry';

const EntryList = props => {
  return (
    <div>
      {props.entries.map((entry, index) => (
        <Entry
          key={entry.id}
          entry={entry}
          onUpdateCount={compName => props.onUpdateCount(compName)}
          onDeleteEntry={() => props.onDeleteEntry(entry.id)}
          onTypeChange={entType => props.handleTypeChange(entType, entry.id)}
          onDescriptionChange={desc =>
            props.handleDescrptionChange(desc, entry.id)
          }
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
    handleTypeChange: (entType, id) => {
      dispatch(updateEntryType(entType, id));
    },
    handleDescrptionChange: (desc, id) => {
      dispatch(updateEntryDescription(desc, id));
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
