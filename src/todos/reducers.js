// reducer is just a function
import {
  CREATE_TODO,
  MARK_COMPLETE,
  REMOVE_TODO,
  LOAD_TODOS_IN_PROGRESS,
  LOAD_TODOS_SUCCESS,
  LOAD_TODOS_FAILURE,
} from "./actions";

export const isLoading = (state = false, action) => {
  const { type } = action;
  switch (type) {
    case LOAD_TODOS_IN_PROGRESS:
      return true;
    case LOAD_TODOS_SUCCESS:
    case LOAD_TODOS_FAILURE:
      return false;
    default:
      return state; // which is false as defined above
  }
};

export const todos = (state = [], action) => {
  // here we have defined default value of our state as empty array
  const { type, payload } = action;
  switch (type) {
    case CREATE_TODO: {
    //   const { text } = payload;
    //   const newTodo = {
    //     text,
    //     isCompleted: false,
    //   };
    //   return state.concat(newTodo);
    const { todo } = payload;
    return state.concat(todo);
    }
    case REMOVE_TODO: {
    //   const { text } = payload;
    //   return state.filter((todo) => todo.text !== text);
    const { todo: todotoRemove } = payload;// todo is nicked name here
    return state.filter((ele) => ele.id !== todotoRemove.id);;
    }
    case MARK_COMPLETE: {
      const { text } = payload;
      const newState = state.map((ele) => {
        if (ele.text === text) ele.isCompleted = true;
        return ele;
      });
      return newState;
    }
    case LOAD_TODOS_SUCCESS: {
        const { todos } = payload;
        return todos;
    }
    case LOAD_TODOS_IN_PROGRESS:
    case LOAD_TODOS_FAILURE:
    default:
      return state;
  }
};
