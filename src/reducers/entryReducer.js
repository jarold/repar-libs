import * as actions from '../actions/actionTypes';
import { v4 as uuid } from 'uuid';

const initialState = [
  {
    id: uuid(),
    type: 'Select a type',
    description: '[Description]',
    comments: []
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
          description: '[Description]',
          comments: []
        }
      ];
    case actions.DELETE_ENTRY:
      return state.filter(entry => entry.id !== action.id);
    case actions.UPDATE_ENTRY_TYPE:
      return state.map(entry => {
        if (entry.id === action.id) {
          return { ...entry, type: action.entType };
        } else {
          return entry;
        }
      });
    case actions.UPDATE_ENTRY_DESCRIPTION:
      return state.map(entry => {
        if (entry.id === action.id) {
          return { ...entry, description: action.description };
        } else {
          return entry;
        }
      });
    case actions.ADD_COMMENT: {
      const newState = [...state];
      newState[action.index].comments = state[action.index].comments.concat({
        competency: action.competency,
        behavioralIndicator: '[Behavioral Indicator]',
        example: '[Example]',
        impact: '[Impact]'
      });
      return newState;
    }
    case actions.UPDATE_COMMENT: {
      const { entryIndex, commentIndex, name, text } = action;
      const newState = [...state];

      newState[entryIndex].comments[commentIndex][name] = text;
      return newState;
    }
    case actions.DELETE_COMMENT: {
      const { entryIndex, commentIndex } = action;
      const newState = [...state];
      newState[entryIndex].comments = newState[entryIndex].comments.filter(
        (comment, index) => index !== commentIndex
      );
      return newState;
    }
    default:
      return state;
  }
};

export default entryReducer;
