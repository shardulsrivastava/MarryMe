import { compose, withState, withHandlers } from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Alert } from 'react-native';

//components
import BudgetModal from './BudgetModal';

// store
import { addToBudget } from '../../store/actions';

const withReduxConnect = connect(
  state => ({}),
  dispatch => bindActionCreators({ addToBudget }, dispatch),
);

const withBudgetModalStates = compose(
  withState('title', 'setTitle', null),
  withState('value', 'setValue', null),
  withState('loading', 'setLoading', false),
);

const withBudgetlHandlers =  withHandlers({
  addItemToBudget: ({ setLoading, addToBudget, title, setTitle, value, setValue }) => () => {
    setLoading(true);

    try {
      if ( !title || !value ) {
        Alert.alert('Vyplňte polia');
      }

      if ( title && value ) {
        addToBudget({
         budgetTitle: title,
         budgetValue: parseFloat(value)
        });
  
        Alert.alert('Položka bola pridaná');
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
  withBudgetModalStates,
  withBudgetlHandlers,
)(BudgetModal);
