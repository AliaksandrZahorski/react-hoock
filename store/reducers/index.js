export const todoReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO": {
      return action.name.length
        ? [
            ...state,
            {
              id: state.length
                ? Math.max(...state.map(todo => todo.id)) + 1
                : 0,
              name: action.name,
              complete: false
            }
          ]
        : state;
    }
    case "DELETE_TODO": {
      return state.filter(x => x.id !== action.id);
    }
    default: {
      return state;
    }
  }
};