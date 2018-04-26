import { compose, withState } from 'recompose';
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';

//components
import EventList from './EventList';

const withEventListStates = compose(
  withState('listModalVisible', 'setListModalVisible', false),
);

export default compose(
  withEventListStates
)(EventList);
