import {
  createToDo,
  removeToDo,
  loadTodosInprogress,
  loadTodosSuccess,
  loadTodosFailure,
} from "./actions";

export const loadTodos = () => async (dispatch, getState) => {
  try {
    // wrap it in try-catch block in order to avoid any error caused by fecthing and return the error defined in catch block
    dispatch(loadTodosInprogress());
    const response = await fetch("http://localhost:8080/todos-delay");
    const todos = await response.json();

    dispatch(loadTodosSuccess(todos));
  } catch (err) {
    dispatch(loadTodosFailure());
    dispatch(displayAlert(err));
  }
};
export const addTodorequest = (text) => async (dispatch) => {
  try {
    const body = JSON.stringify({ text });
    const response = await fetch("http://localhost:8080/todos", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "post",
      body,
    });
    const todo = await response.json();
    dispatch(createToDo(todo));
  } catch (err) {
    dispatch(loadTodosFailure);
    displayAlert(err);
  }
};
export const deleterequest = (id) => async (dispatch) => {
    console.log('here')
  try {
    const body = JSON.stringify(id);
    console.log(id)
    const response = await fetch(`http://localhost:8080/todos/${id}`, {
      method: "delete"
    });
    console.log('dispatch')
    const removedtodoitem = await response.json();
    dispatch(removeToDo(removedtodoitem));
  } catch (err) {
    dispatch(loadTodosFailure);
    displayAlert(err);
  }
};
export const displayAlert = (text) => () => {
  alert(text);
};
