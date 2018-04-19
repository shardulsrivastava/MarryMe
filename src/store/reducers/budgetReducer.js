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

    /*case 'ADD_TO_BUDGET':
      return {
        ...state,
        budgets: [
          {
            budgetTitle: action.payload.budgetTitle,
            budgetValue: action.payload.budgetValue
          }
        ]
      };*/
    case 'ADD_TO_BUDGET':
      const shortId = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
      const newItem = {
        id: `${shortId()}-${shortId()}`,
        budgetTitle: action.payload.budgetTitle,
        budgetValue: action.payload.budgetValue
      }
      return {
        ...state,
        budgets: [newItem, ...state.budgets],
      }

    default:
      return state;
  }
};