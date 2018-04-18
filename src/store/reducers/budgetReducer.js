const initialState = {
  maxBudget: null,
  budgets: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_MAX_BUDGET':
      return {
        ...state,
        maxBudget: action.payload.maxBudget,
      };

    case 'ADD_TO_BUDGET':
      return {
        todos: [
          ...state.budgets,
          {
            budgetTitle: action.payload.budgetTitle,
            budgetValue: action.payload.budgetValue
          }
        ]
      };

    default:
      return state;
  }
};