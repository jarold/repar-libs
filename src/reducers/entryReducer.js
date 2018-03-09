import * as actions from '../actions/actionTypes';

const initialState = [
  {
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
          type: 'Select a type',
          description: '[Description]'
        }
      ];
    default:
      return state;
  }
};

export default entryReducer;
