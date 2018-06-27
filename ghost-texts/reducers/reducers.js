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
  currToken: '',
  isGettingMessages: false,
  creatingToken: false,
  tokenCreated: false,
  tokenError: false,
  showLoader: false,
  loadConfirm: false,
  loadError: false
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
    case actionTypes.CREATE_TOKEN:
    return {
      ...state,
      creatingToken: true,
      tokenCreated: false,
      tokenError: false
    };
    case actionTypes.TOKEN_CREATED:
    return {
      ...state,
      currToken: action.payload,
      creatingToken: false,
      tokenCreated: true,
      tokenError: false
    };
    case actionTypes.ERROR_CREATING_TOKEN:
    return {
      ...state,
      creatingToken: false,
      tokenCreated: false,
      tokenError: true
    };
    case actionTypes.SEND_MESSAGE:
    return {
      ...state,
      sendingMessage: true,
      loadConfirm: true,
      sendError: false
    };
    case actionTypes.MESSAGE_SENT:
    return {
      ...state,
      sendingMessage: false,
      loadConfirm: true,
      sendError: false
    };
    case actionTypes.SEND_MESSAGE_ERROR:
    return {
      ...state,
      sendingMessage: false,
      loadConfirm: false,
      loadError: true
    };
    case actionTypes.SHOW_LOADER:
    return {
      ...state,
      showLoader: true,
    };
    case actionTypes.HIDE_LOADER:
    return {
      ...state,
      showLoader: false,
    };
    default:
      return state;
  }
};