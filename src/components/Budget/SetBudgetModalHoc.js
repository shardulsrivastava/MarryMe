import { compose, withState, withHandlers } from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Alert } from 'react-native';

//components
import SetBudgetModal from './SetBudgetModal';

// store
import { setMaxBudget } from '../../store/actions';

const withReduxConnect = connect(
  state => ({}),
  dispatch => bindActionCreators({ setMaxBudget }, dispatch),
);

const withBudgetModalStates = compose(
  withState('budget', 'setBudget', null),
  withState('loading', 'setLoading', false),
);

const withBudgetlHandlers =  withHandlers({
  setMaximalBudget: ({ setLoading, closeModal, setMaxBudget, budget, setBudget }) => () => {
    setLoading(true);

    const itemValue = budget && budget.includes(',') ? parseFloat(budget.replace(',','.')) : parseFloat(budget);

    try {
      if ( !budget ) {
        Alert.alert('Zadajte rozpočet');
      }

      if ( budget ) {
        setMaxBudget({
         maxBudget: itemValue,
        });
  
        Alert.alert('Rozpočet bol nastavený');
        closeModal();
      }

      setBudget(null);
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
)(SetBudgetModal);
