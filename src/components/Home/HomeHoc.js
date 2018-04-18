import { compose, withState, withHandlers } from 'recompose';
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';

//components
import Home from './Home';

const withReduxStates = connect(state => ({
  //Logged couple states
  brideName: state.couple.bride,
  groomName: state.couple.groom,
  //basic informations states
  city: state.place.city,
  weddingDate: state.date.weddingDate,
  //budget states
  maxBudget: state.budget.maxBudget,
}));

const withHomeStates = compose(
  withState('placeModalVisible', 'setPlaceModalVisible', false),
  withState('dateModalVisible', 'setDateModalVisible', false),
);

const withHomeHandlers =  withHandlers({
  goToBudget: props => () => {
    const { navigation } = props;
    navigation.navigate('Budget');
  },
})

export default compose(
  withNavigation,
  withReduxStates,
  withHomeStates,
  withHomeHandlers,
)(Home);
