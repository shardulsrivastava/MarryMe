// User actions
export const SET_LOGGED_USER = 'SET_LOGGED_USER';
export const RESET_LOGGED_USER = 'RESET_LOGGED_USER';
export const SET_STATUS = 'SET_STATUS';
export const SET_USER = 'SET_USER';

export const setLoggedUser = user => ({
  type: SET_LOGGED_USER,
  payload: user,
});

export const resetLoggedUser = () => ({
  type: RESET_LOGGED_USER,
  payload: null,
});

export const setUser = email => ({
  type: SET_USER,
  payload: email,
});