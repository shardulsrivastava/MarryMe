import { compose, withState, withHandlers } from 'recompose';
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';

//components
import Home from './Home';

const withReduxStates = connect(state => ({
  //basic informations states
  weddingDate: state.date.weddingDate,
  //budget states
  maxBudget: state.budget.maxBudget,
  budgetTotal: state.budget.total,
  //todos states
  todos: state.todo.todos,
}));

const withHomeStates = compose(
  withState('dateModalVisible', 'setDateModalVisible', false),
);

const withHomeHandlers =  withHandlers({
  goToBudget: props => () => {
    const { navigation } = props;
    navigation.navigate('Budget');
  },
  goToEventList: props => () => {
    const { navigation } = props;
    navigation.navigate('EventList');
  },
})

export default compose(
  withNavigation,
  withReduxStates,
  withHomeStates,
  withHomeHandlers,
)(Home);
