import { compose, withState, withHandlers } from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Alert } from 'react-native';
import Moment from 'moment';

//components
import AddToListModal from './AddToListModal';

// store
import { addToTodo } from '../../store/actions';

const withReduxConnect = connect(
  state => ({}),
  dispatch => bindActionCreators({ addToTodo }, dispatch),
);

const withListModalStates = compose(
  withState('loading', 'setLoading', false),
  withState('title', 'setTitle', null),
);

const withListModallHandlers =  withHandlers({
  addTodoItem: ({ setLoading, closeModal, addToTodo, title, setTitle }) => () => {
    setLoading(true);

    const datetime = new Moment();

    try {
      if ( !title ) {
        Alert.alert('Zadajte text');
      }

      if ( title ) {
        addToTodo({
         createdAt: datetime,
         todoText: title
        });
  
        closeModal();
      }

      setTitle(null);
      setLoading(false);
    } catch(e) {
      console.log(e);
      setLoading(false);
    }
    
  },
});

export default compose(
  withReduxConnect,
  withListModalStates,
  withListModallHandlers,
)(AddToListModal);
