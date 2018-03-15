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

const updateCount = compName => {
  return {
    type: actions.UPDATE_COUNTER,
    compName: compName
  };
};

export { addEntry, deleteEntry, updateCount };
