// Action Creators

import * as actions from './actionTypes';

export const addEntry = () => {
  return {
    type: actions.ADD_ENTRY
  };
};

export const deleteEntry = (id) => {
  return {
    type: actions.DELETE_ENTRY,
    id: id
  }
}