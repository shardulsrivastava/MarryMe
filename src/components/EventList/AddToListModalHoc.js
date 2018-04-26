import { compose, withState, withHandlers } from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Alert } from 'react-native';

//components
import AddToListModal from './AddToListModal';

const withListModalStates = compose(
  withState('loading', 'setLoading', false),
  withState('title', 'setTitle', null),
);

const withListModallHandlers =  withHandlers({
});

export default compose(
  withListModalStates,
  withListModallHandlers,
)(AddToListModal);
