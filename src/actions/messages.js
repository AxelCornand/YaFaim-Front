export const SET_MESSAGE_DESCRIPTION = 'SET_MESSAGE_DESCRIPTION';
export const CLEAN_MESSAGE_DESCRIPTION = 'CLEAN_MESSAGE_DESCRIPTION';

export const setMessageDescription = (message, page, success) => ({
  type: SET_MESSAGE_DESCRIPTION,
  message: message,
  page: page,
  success: success,
});
export const cleanMessageDescription = () => ({
  type: CLEAN_MESSAGE_DESCRIPTION,
});
