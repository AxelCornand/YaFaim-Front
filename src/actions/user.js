export const CHANGE_FIELD_LOGIN = 'CHANGE_FIELD_LOGIN';
export const CHANGE_FIELD_REGISTER = 'CHANGE_FIELD_REGISTER';
export const REGISTER = 'REGISTER';
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const RESET_FORM = 'RESET_FORM';
export const SET_IS_MATCH_PASSWORD = 'SET_IS_MATCH_PASSWORD';
export const GET_USER_INFO = 'GET_USER_INFO';
export const SET_USER = 'SET_USER';
export const CONTACT_SUBMIT = 'CONTACT_SUBMIT';
export const CHANGE_PASSWORD = 'CHANGE_PASSWORD';
export const CONTACT_FORM = 'CONTACT_FORM';
export const VALIDATE_CONTACT_FORM = 'VALIDATE_CONTACT_FORM';
export const FETCH_NAME_FOR_REGISTER = 'FETCH_NAME_FOR_REGISTER';

export const CHANGE_USER = 'CHANGE_USER';

export const submitLogin = () => ({
  type: SUBMIT_LOGIN,
});
export const register = () => ({
  type: REGISTER,
});

export const changeUser = () => ({
  type: CHANGE_USER,
});

export const setUser = (data) => ({
  type: SET_USER,
  newValue: data,
});

export const changeFieldLogin = (newValue, key) => ({
  type: CHANGE_FIELD_LOGIN,
  newValue: newValue,
  identifier: key,
});
export const changeFieldRegister = (newValue, key) => ({
  type: CHANGE_FIELD_REGISTER,
  newValue: newValue,
  identifier: key,
});

export const resetForm = () => ({
  type: RESET_FORM,
});

export const setIsMatchPassword = (bool) => ({
  type: SET_IS_MATCH_PASSWORD,
  value: bool,
});

export const getUserInfo = (token) => ({
  type: GET_USER_INFO,
  value: token,
});

export const contactSubmit = (bool) => ({
  type: CONTACT_SUBMIT,
  value: bool,
});

export const contactForm = () => ({
  type: CONTACT_FORM,
});
export const fetchNameForRegister = (newFirstname, newLastname) => ({
  type: FETCH_NAME_FOR_REGISTER,
  newFirstname: newFirstname,
  newLastname: newLastname,

});

export const validateContactForm = (bool) => ({
  type: VALIDATE_CONTACT_FORM,
  value: bool,
});
