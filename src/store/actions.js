// User actions
export const SET_LOGGED_COUPLE = 'SET_LOGGED_COUPLE';
export const RESET_LOGGED_COUPLE = 'RESET_LOGGED_COUPLE';

export const setLoggedCouple = couple => ({
  type: SET_LOGGED_COUPLE,
  payload: couple,
});

export const resetLoggedCouple = () => ({
  type: RESET_LOGGED_COUPLE,
  payload: null,
});

//Place actions
export const SET_PLACE_CITY = 'SET_PLACE_CITY';
export const setPlaceCity = () => ({
  type: SET_PLACE_CITY,
  payload: null,
});

//App actions
export const SET_APP_READY = 'SET_APP_READY';

export const setAppReady = ready => ({
  type: SET_APP_READY,
  payload: ready,
});
