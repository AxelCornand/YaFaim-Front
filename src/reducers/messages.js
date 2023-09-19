/* eslint-disable indent */
import {
  SET_MESSAGE_DESCRIPTION,
  CLEAN_MESSAGE_DESCRIPTION,
} from '../actions/messages';

export const initialState = {
  messageLogin: '',
  messageLogout: '',
  messageRegister: '',
  messageModification: '',
  messageRecipe: '',
  messageContact: '',
  success: '',
};

const messagesReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_MESSAGE_DESCRIPTION:
      {
        switch (action.page) {
          case 'messageLogin':
            return {
              ...state,
              messageLogin: action.message,
              success: action.success,
            };
          case 'messageRegister':
            return {
              ...state,
              messageRegister: action.message,
              success: action.success,
            };
          case 'messageModification':
            return {
              ...state,
              messageModification: action.message,
              success: action.success,
            };
          case 'messageLogout':
            return {
              ...state,
              messageLogout: action.message,
              success: action.success,
            };
          case 'messageRecipe':
            return {
              ...state,
              messageRecipe: action.message,
              success: action.success,
            };
          case 'messageContact':
            return {
              ...state,
              messageContact: action.message,
              success: action.success,
            };
          default: break;
        }
        return {
          ...state,
          success: action.success,
        };
      }

    case CLEAN_MESSAGE_DESCRIPTION:
      return {
        ...state,
        messageLogin: '',
        messageRegister: '',
        messageModification: '',
        messageLogout: '',
        messageRecipe: '',
        messageContact: '',
        success: '',
      };

    default:
      return state;
  }
};

export default messagesReducer;
