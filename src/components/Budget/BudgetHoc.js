import { compose, withState, withHandlers } from 'recompose';
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

//components
import Budget from './Budget';

// store
import { deleteBudgetColumn, setBudgetTotal } from '../../store/actions';

const withBudget = connect(state => ({
  maxBudget: state.budget.maxBudget,
  budgetTotal: state.budget.total,
  budgetData: state.budget.budgets,
}));

const withReduxConnect = connect(
  state => ({}),
  dispatch => bindActionCreators({ deleteBudgetColumn, setBudgetTotal }, dispatch),
);

const withBudgetStates = compose(
  withState('budgetModalVisible', 'setBudgetModalVisible', false),
  withState('maxBudgetModalVisible', 'setMaxBudgetModalVisible', false),
);

const withBudgetlHandlers =  withHandlers({
  deleteItem: ({ budgetTotal, setBudgetTotal, deleteBudgetColumn }) => async args => {
    itemId = args.id;
    itemValue = args.value;

    try {
      deleteBudgetColumn({
        id: itemId,
      });
      setBudgetTotal({
        total: budgetTotal - itemValue
      });

    } catch(e) {
      console.log(e);
    }
    
  },
});

export default compose(
  withReduxConnect,
  withBudget,
  withBudgetStates,
  withBudgetlHandlers,
)(Budget);
