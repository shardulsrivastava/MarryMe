const initialState = {
  maxBudget: null,
  total: 0,
  budgets: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_MAX_BUDGET':
      return {
        ...state,
        maxBudget: action.payload.maxBudget,
      };

    case 'SET_BUDGET_TOTAL':
      return {
        ...state,
        total: action.payload.total,
      };

    case 'ADD_TO_BUDGET':
      const shortId = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
      const newItem = {
        id: `${shortId()}-${shortId()}`,
        budgetTitle: action.payload.budgetTitle,
        budgetValue: action.payload.budgetValue
      }
      return {
        ...state,
        total: action.payload.budgetTotal,
        budgets: [newItem, ...state.budgets],
      }

    case 'DELETE_BUDGET_COLUMN':
      const { payload: { id } } = action
      const newItems = state.budgets.filter(item => item.id !== id)
      return {
        ...state,
        budgets: newItems,
      }

    default:
      return state;
  }
};