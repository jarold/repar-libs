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

const addComment = (compName, index) => {
  return {
    type: actions.ADD_COMMENT,
    competency: compName,
    index: index
  };
};

const deleteComment = index => {
  return {
    type: actions.DELETE_COMMENT,
    index: index
  };
};

const updateCount = compName => {
  return {
    type: actions.UPDATE_COUNTER,
    compName: compName
  };
};

export { addEntry, deleteEntry, addComment, deleteComment, updateCount };
