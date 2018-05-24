import React from 'react';
import { connect } from 'react-redux';

import {
  deleteEntry,
  updateEntryType,
  updateEntryDescription,
  updateCount,
  addComment,
  updateComment,
  deleteComment
} from '../actions';
import Entry from './Entry';

const EntryList = props => {
  return (
    <div>
      {props.entries.map((entry, index) => (
        <Entry
          key={entry.id}
          entry={entry}
          onDeleteEntry={() => props.handleDeleteEntry(entry.id)}
          onTypeChange={entType => props.handleTypeChange(entType, entry.id)}
          onDescriptionChange={desc =>
            props.handleDescrptionChange(desc, entry.id)
          }
          onAddComment={compName => props.handleAddComment(compName, index)}
          onUpdateComment={(commentIdx, name, text) => {
            props.handleUpdateComment(index, commentIdx, name, text);
          }}
          onDeleteComment={commentIdx =>
            props.handleDeleteComment(index, commentIdx)
          }
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
    handleDeleteEntry: id => {
      dispatch(deleteEntry(id));
    },
    handleTypeChange: (entType, id) => {
      dispatch(updateEntryType(entType, id));
    },
    handleDescrptionChange: (desc, id) => {
      dispatch(updateEntryDescription(desc, id));
    },
    handleAddComment: (compName, idx) => {
      dispatch(addComment(compName, idx));
    },
    handleUpdateComment: (entryIndex, commentIndex, name, text) => {
      dispatch(updateComment(entryIndex, commentIndex, name, text));
    },
    handleDeleteComment: (entryIndex, commentIndex) => {
      dispatch(deleteComment(entryIndex, commentIndex));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EntryList);
