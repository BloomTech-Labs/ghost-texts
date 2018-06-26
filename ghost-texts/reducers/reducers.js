import * as actionTypes from '../actions/actions';

const initialState = {
  messages: [
    {
      body: 'heres a message',
      id: '0',
    },
    {
      body: 'another message',
      id: '1',
    },
  ],
  isGettingMessages: false,
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GETTING_MESSAGES:
      return {
        ...state,
        isGettingMessages: true,
      };
    case actionTypes.MESSAGES_RECEIVED:
      return {
        ...state,
        messages: [...action.payload],
        isGettingMessages: false,
      };
    case actionTypes.ERROR_GETTING_MESSAGES:
      return {
        ...state,
        isGettingMessages: false,
        gettingMessagesError: true,
      };
    default:
      return state;
  }
};