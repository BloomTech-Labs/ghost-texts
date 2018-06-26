import axios from 'axios';

export const GETTING_MESSAGES = 'GET_MESSAGES';
export const MESSAGES_RECEIVED = 'MESSAGES_RECEIVED';
export const ERROR_GETTING_MESSAGES  = 'ERROR_GETTING_MESSAGES';

export const SEND_MESSAGE = 'SEND_MESSAGE';
export const MESSAGE_SENT = 'MESSAGE_SENT';
export const SEND_MESSAGE_ERROR = 'SEND_MESSAGE_ERROR';

export const PHONE_ERROR = 'PHONE_ERROR';
export const PHONE_VALID = 'PHONE_VALID';

export const MESSAGE_FIELD_ERROR = 'MESSAGE_FIELD_ERROR';
export const MESSAGE_FIELD_VALID = 'MESSAGE_FIELD_VALID';

export const STRIPE_FIELDS_ERROR = 'STRIPE_FIELDS_ERROR';
export const STRIPE_FIELDS_VALID = 'STRIPE_FIELDS_VALID';

// export const CREATE_TOKEN = 'CREATE_TOKEN';
// export const TOKEN_CREATED = 'TOKEN_CREATED';
// export const ERROR_CREATING_TOKEN = 'ERROR_CREATING_TOKEN';

export const FORM_COMPLETE = 'FORM_COMPLETE';

// export const CARD_VALID = 'CARD_VALID';
// export const CARD_INVALID = 'CARD_INVALID';


const API = 'https://limitless-refuge-43765.herokuapp.com/api/';
const messages = 'recent-messages';
const send = 'send';

export const getMessages = () => {
  return (dispatch) => {
    dispatch({ type: GETTING_MESSAGES });
    axios
      .get(API + messages)
      .then(({ data }) => {
        dispatch({ type: MESSAGES_RECEIVED, payload: data });
      })
      .catch((error) => {
        dispatch({ type: ERROR_GETTING_MESSAGES, payload: error });
      });
  };
};
export const sendMessage = (data) => {
  return (dispatch) => {
    dispatch({ type: SEND_MESSAGE });
    axios
      .post(API + send, data)
      .then(({ data }) => {
        dispatch({ type: MESSAGE_SENT, payload: data });
      })
      .catch((error) => {
        dispatch({ type: SEND_MESSAGE_ERROR, payload: error });
      });
  };
};