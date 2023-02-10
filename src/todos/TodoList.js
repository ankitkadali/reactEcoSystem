import React, { useEffect } from "react";
import { connect } from "react-redux";
import { removeToDo, markComplete } from "./actions";
import { loadTodos, deleterequest } from "./thunks";
import TodoListItem from "./TodoListItem";
import NewTodoForm from "./NewTodoform";
import "./styles/TodoList.css";

const Todolist = ({
  todos = [],
  onRemove,
  markAsDone,
  isLoading,
  starLoadingTodos,
}) => {
  // provide default value for the prop

  useEffect(() => {
    starLoadingTodos();
  }, []);

  const loadingMessage = <div>Loading....</div>;
  const content = (
    <div className="list-wrapper">
      <NewTodoForm />
      {todos.map((ele, index) => (
        <TodoListItem
          todo={ele}
          onRemove={onRemove}
          markComplete={markAsDone}
          itemkey={index}
          key={`${index}_item`}
        />
      ))}
    </div>
  );
  return isLoading ? loadingMessage : content;
};

const mapStateToProps = (state) => ({
  todos: state.todos,
  isLoading: state.isLoading,
});
const mapStateToDispatch = (dispatch) => ({
  // onRemove: (text) => dispatch(removeToDo(text)),
  onRemove: (id) => dispatch(deleterequest(id)),
  markAsDone: (text) => dispatch(markComplete(text)),
  starLoadingTodos: () => dispatch(loadTodos()),
});
export default connect(mapStateToProps, mapStateToDispatch)(Todolist);
