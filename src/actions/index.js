// Action Creators
import * as actions from './actionTypes';

const addEntry = () => {
  return {
    type: actions.ADD_ENTRY
  };
};

const deleteEntry = id => {
  return {
    type: actions.DELETE_ENTRY,
    id: id
  };
};

const updateEntryType = (entType, id) => {
  return {
    type: actions.UPDATE_ENTRY_TYPE,
    entType: entType,
    id: id
  };
};

const updateEntryDescription = (description, id) => {
  return {
    type: actions.UPDATE_ENTRY_DESCRIPTION,
    description: description,
    id: id
  };
};

const addComment = (compName, index) => {
  return {
    type: actions.ADD_COMMENT,
    competency: compName,
    index: index
  };
};

const updateComment = (entryIndex, commentIndex, name, text) => {
  return {
    type: actions.UPDATE_COMMENT,
    entryIndex,
    commentIndex,
    name,
    text
  };
};

const deleteComment = (entryIndex, commentIndex) => {
  return {
    type: actions.DELETE_COMMENT,
    entryIndex,
    commentIndex
  };
};

const updateCount = compName => {
  return {
    type: actions.UPDATE_COUNTER,
    compName: compName
  };
};

export {
  addEntry,
  deleteEntry,
  updateEntryType,
  updateEntryDescription,
  addComment,
  updateComment,
  deleteComment,
  updateCount
};
