const initialState = {
  weddingDate: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_WEDDING_DATE':
      return {
        ...state,
        weddingDate: action.payload.weddingDate,
      };

    default:
      return state;
  }
};