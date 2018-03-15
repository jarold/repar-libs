import * as actions from '../actions/actionTypes';

const initialState = {
  Communication: 0,
  'Decision Making': 0,
  Leadership: 0,
  'Principles of Community': 0,
  'Problem Solving': 0,
  'Quality Improvement': 0,
  'Service Focus': 0,
  'Stewardship and Managing Resources': 0,
  'Strategic Planning': 0,
  Teamwork: 0,
  'Managing People': 0
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.UPDATE_COUNTER:
      const newState = { ...state };
      newState[action.compName] += 1;
      return newState;
    default:
      return state;
  }
};

export default counterReducer;
