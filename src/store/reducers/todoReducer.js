const initialState = {
  todos: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_TODO':
      const shortId = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
      const newTodo = {
        id: `${shortId()}-${shortId()}`,
        createdat: action.payload.createdAt,
        text: action.payload.todoText,
        completed: false,
      }
      return {
        ...state,
        todos: [newTodo, ...state.todos],
      }
    
    case 'DELETE_TODO':
      const { payload: { id } } = action
      const newTodos = state.todos.filter(item => item.id !== id)
      return {
        ...state,
        todos: newTodos,
      }

    case 'TOOGLE_TODO':
      const updatedTodos = state.todos.map(item =>
        (item.id === action.payload.id)
          ? {...item, completed: !item.completed}
          : item
      )
      return {
        ...state,
        todos: updatedTodos,
      }

    default:
      return state;
  }
};