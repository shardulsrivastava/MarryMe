import { compose, withState, withHandlers } from 'recompose';
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

//components
import EventList from './EventList';

// store
import { deleteTodo } from '../../store/actions';

const withEventList = connect(state => ({
  todoData: state.todo.todos,
}));

const withReduxConnect = connect(
  state => ({}),
  dispatch => bindActionCreators({ deleteTodo }, dispatch),
);

const withEventListStates = compose(
  withState('listModalVisible', 'setListModalVisible', false),
);

const withTodoHandlers =  withHandlers({
  deleteItem: ({ deleteTodo }) => async args => {
    itemId = args.id;

    try {
      deleteTodo({
        id: itemId,
      });

    } catch(e) {
      console.log(e);
    }

  },
});

export default compose(
  withReduxConnect,
  withEventList,
  withEventListStates,
  withTodoHandlers,
)(EventList);
