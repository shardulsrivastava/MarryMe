const initialState = {
  ready: false,
  version: '0.1'
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_APP_READY':
      return {
        ...state,
        ready: true,
      };

    default:
      return state;
  }
};