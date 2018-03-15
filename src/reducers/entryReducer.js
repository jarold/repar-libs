import * as actions from '../actions/actionTypes';
import { v1 as uuid } from 'uuid';

const initialState = [
  {
    id: uuid(),
    type: 'Select a type',
    description: '[Description]'
  }
];

const entryReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_ENTRY:
      return [
        ...state,
        {
          id: uuid(),
          type: 'Select a type',
          description: '[Description]'
        }
      ];
    case actions.DELETE_ENTRY:
      return state.filter((entry) => entry.id !== action.id);
    default:
      return state;
  }
};

export default entryReducer;
