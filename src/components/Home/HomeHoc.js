import { compose, withState } from 'recompose';
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';

const withLogged = connect(state => ({
  brideName: state.couple.bride,
  groomName: state.couple.groom,
}));

const withBasicInfo = connect(state => ({
  city: state.place.city,
  weddingDate: state.date.weddingDate,
}));

const withHomeStates = compose(
  withState('placeModalVisible', 'setPlaceModalVisible', false),
  withState('dateModalVisible', 'setDateModalVisible', false),
);

//components
import Home from './Home';

export default compose(
  withLogged,
  withBasicInfo,
  withHomeStates,
)(Home);
