// Combining reducers

import { combineReducers } from 'redux';
import entryReducer from './entryReducer';

// key 'entries' is the name of the store slice
export default combineReducers({
  entries: entryReducer
});
