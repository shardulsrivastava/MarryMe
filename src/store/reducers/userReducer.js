const initialStateUser = {
  id: null,
  email: null,
};

export default (state = initialStateUser, action) => {
  switch (action.type) {
    case 'SET_LOGGED_USER':
      return {
        ...state,
        id: action.payload.id,
        email: action.payload.email,
      };

    case 'RESET_LOGGED_USER':
      return {
        ...state,
        id: null,
        email: null,
      };

    case 'SET_USER':
      return {
        ...state,
        email: action.payload.email,
      };

    default:
      return state;
  }
};