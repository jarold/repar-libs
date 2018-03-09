import * as actions from '../actions/actionTypes';

const initialState = {
  entries: []
};

const entryReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_ENTRY:
      return {
        ...state,
        entries: [
          ...state.entries,
          {
            type: 'Select a type',
            description: '[Description]'
          }
        ]
      };
    default:
      return state;
  }
};

export default entryReducer;
