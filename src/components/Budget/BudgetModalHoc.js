import { compose, withState, withHandlers } from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Alert } from 'react-native';

//components
import BudgetModal from './BudgetModal';

// store
import { addToBudget, setBudgetTotal } from '../../store/actions';

const withReduxStates = connect(state => ({
  budgetSum: state.budget.total,
}));

const withReduxConnect = connect(
  state => ({}),
  dispatch => bindActionCreators({ addToBudget, setBudgetTotal }, dispatch),
);

const withBudgetModalStates = compose(
  withState('title', 'setTitle', null),
  withState('value', 'setValue', null),
  withState('loading', 'setLoading', false),
);

const withBudgetlHandlers =  withHandlers({
  addItemToBudget: ({ setLoading, closeModal, addToBudget, title, setTitle, value, setValue, budgetSum, setBudgetTotal }) => () => {
    setLoading(true);

    const itemValue = value && value.includes(',') ? parseFloat(value.replace(',','.')) : parseFloat(value);

    try {
      if ( !title || !value ) {
        Alert.alert('Vyplňte polia');
      }

      if ( title && value ) {
        addToBudget({
         budgetTitle: title,
         budgetValue: itemValue
        });
        setBudgetTotal({
          total: budgetSum + itemValue
        })
  
        closeModal();
      }

      setTitle(null);
      setValue(null);
      setLoading(false);
    } catch(e) {
      console.log(e);
      setLoading(false);
    }
    
  },
});

export default compose(
  withReduxConnect,
  withReduxStates,
  withBudgetModalStates,
  withBudgetlHandlers,
)(BudgetModal);
