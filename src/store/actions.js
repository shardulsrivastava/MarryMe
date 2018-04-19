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

export const setPlaceCity = place => ({
  type: SET_PLACE_CITY,
  payload: place,
});

//Date actions
export const SET_WEDDING_DATE = 'SET_WEDDING_DATE';

export const setWeddingDate = date => ({
  type: SET_WEDDING_DATE,
  payload: date,
});

//Budget actions
export const SET_MAX_BUDGET = 'SET_MAX_BUDGET';
export const ADD_TO_BUDGET = 'ADD_TO_BUDGET';
export const SET_BUDGET_TOTAL = 'SET_BUDGET_TOTAL';

export const setMaxBudget = budget => ({
  type: SET_MAX_BUDGET,
  payload: budget,
});

export const addToBudget = budgets => ({
  type: ADD_TO_BUDGET,
  payload: budgets,
})

export const setBudgetTotal = total => ({
  type: SET_BUDGET_TOTAL,
  payload: total,
})


//App actions
export const SET_APP_READY = 'SET_APP_READY';

export const setAppReady = ready => ({
  type: SET_APP_READY,
  payload: ready,
});
