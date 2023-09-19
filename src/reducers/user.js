/* eslint-disable indent */
import {
  CHANGE_FIELD_LOGIN,
  CHANGE_FIELD_REGISTER,
  RESET_FORM,
  VALIDATE_CONTACT_FORM,
  CONTACT_SUBMIT,
  FETCH_NAME_FOR_REGISTER,
  SET_IS_MATCH_PASSWORD,
} from '../actions/user';

export const initialState = {
  email: '',
  password: '',
  confirmpassword: '',
  firstname: '',
  lastname: '',
  role: '',
  isMatchPassword: true,
  isValidateContactForm: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_FIELD_LOGIN:
      return {
        ...state,
        [action.identifier]: action.newValue,
      };

    case CHANGE_FIELD_REGISTER:
      return {
        ...state,
        [action.identifier]: action.newValue,
      };
    case RESET_FORM:
      return {
        ...state,
        email: '',
        password: '',
        confirmpassword: '',
        firstname: '',
        lastname: '',
      };

    case SET_IS_MATCH_PASSWORD:
      return {
        ...state,
        isMatchPassword: action.value,
      };
    case CONTACT_SUBMIT:
      return {
        ...state,
        isSubmittedContact: action.value,
      };
    case VALIDATE_CONTACT_FORM:
      return {
        ...state,
        isValidateContactForm: action.value,
      };
    case FETCH_NAME_FOR_REGISTER:
      return {
        ...state,
        firstname: action.newFirstname,
        lastname: action.newLastname,
      };

    default:
      return state;
  }
};

export default reducer;
