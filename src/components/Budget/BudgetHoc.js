import { compose, withState } from 'recompose';
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';

//components
import Budget from './Budget';

const withBudget = connect(state => ({
  maxBudget: state.budget.maxBudget,
  budgetTotal: state.budget.total,
  budgetData: state.budget.budgets,
}));

const withBudgetStates = compose(
  withState('budgetModalVisible', 'setBudgetModalVisible', false),
  withState('maxBudgetModalVisible', 'setMaxBudgetModalVisible', false),
);

export default compose(
  withBudget,
  withBudgetStates
)(Budget);
