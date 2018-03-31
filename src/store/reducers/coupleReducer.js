const initialStateCouple = {
  bride: null,
  groom: null,
  status: null,
};

export default (state = initialStateCouple, action) => {
  switch (action.type) {
    case 'SET_LOGGED_COUPLE':
      return {
        ...state,
        bride: action.payload.bride,
        groom: action.payload.groom,
        status: action.payload.status,
      };

    case 'RESET_LOGGED_COUPLE':
      return {
        ...state,
        bride: null,
        groom: null,
        status: null,
      };

    default:
      return state;
  }
};