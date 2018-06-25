import * as actionTypes from '../actions/actions';

const initialState = {
  messages: [],
  gettingMessages,
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GETTING_MESSAGES:
      return {
        ...state,
        gettingMessages: true,
      };
    case actionTypes.MESSAGES_RECEIVED:
      return {
        ...state,
        messages: [...action.payload],
        gettingMessages: false,
      };
    case actionTypes.ERROR_GETTING_MESSAGES:
      return {
        ...state,
        gettingMessages: false,
        gettingMessagesError: true,
      };
    default:
      return state;
  }
};