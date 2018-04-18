import { compose, withState } from 'recompose';
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';

//components
import Budget from './Budget';

const withBudgetStates = compose(
  withState('budgetModalVisible', 'setBudgetModalVisible', false),
);

export default compose(
  withBudgetStates
)(Budget);
