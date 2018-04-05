const initialState = {
  city: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PLACE_CITY':
      return {
        ...state,
        city: action.payload.city,
      };

    default:
      return state;
  }
};