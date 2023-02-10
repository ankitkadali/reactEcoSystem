export const CREATE_TODO = "CREATE_TODO"; // action type
export const REMOVE_TODO = "REMOVE_TODO";
export const MARK_COMPLETE = "MARK_COMPLETE";
export const LOAD_TODOS_IN_PROGRESS = "LOAD_TODOS_IN_PROGRESS";
export const LOAD_TODOS_SUCCESS = "LOAD_TODOS_SUCCESS";
export const LOAD_TODOS_FAILURE = "LOAD_TODOS_FAILURE";

// below is an action creater function which is imported in other components
export const createToDo = (todo) => ({
  type: CREATE_TODO,
  payload: { todo }, // { text }
});

export const removeToDo = (todo) => ({
  type: REMOVE_TODO,
  payload: { todo },
});

export const markComplete = (text) => ({
  type: MARK_COMPLETE,
  payload: { text },
});

export const loadTodosInprogress = () => ({
  type: LOAD_TODOS_IN_PROGRESS,
});

export const loadTodosSuccess = (todos) => ({
  type: LOAD_TODOS_SUCCESS,
  payload: { todos },
});

export const loadTodosFailure = () => ({
  type: LOAD_TODOS_FAILURE,
});
