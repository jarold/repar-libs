// Combining reducers

import { combineReducers } from 'redux';
import entryReducer from './entryReducer';
import counterReducer from './counterReducer';

// key 'entries' is the name of the slice of state in store (i.e. state.entries)
export default combineReducers({
  entries: entryReducer,
  counter: counterReducer
});
