import React, { useState } from "react";
import { connect } from "react-redux";
import { createToDo} from "./actions";
import { addTodorequest } from "./thunks";
import "./styles/NewTodoForm.css";

const NewTodoForm = ({ todos, onCreateTodoClick, addTodo}) => {
  // here todos is passed through the connect function at bottom from redux
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    console.log(event.target.value);
    setInputValue(event.target.value);
  };
  const handleCreateTodoClick = () => {
    const isDuplicatedText = todos.some((todo) => todo === inputValue);
    if (!isDuplicatedText) {
      // onCreateTodoClick(inputValue);
      addTodo(inputValue);
      setInputValue("");
    }
  };
  return (
    <div>
      <input
        className="new-todo-input"
        type="text"
        value={inputValue}
        onChange={(event) => handleInputChange(event)}
      />
      <button className="new-todo-button" onClick={handleCreateTodoClick}>
        Create Todo{" "}
      </button>
    </div>
  );
};
// the state property that gets passed to the msp is the entire redux state; for us it only has todos property so far (as defined in store.js line 4,5)
const mapStateToProps = (state) => ({
  todos: state.todos,
});
const mapStateToDispatch = (dispatch) => ({
  // onCreateTodoClick: (text) => dispatch(createToDo(text)), // this is a function which you create as a property under dispatch object
  // this also gets passed to our NewTodoform component through connect as below
  addTodo: (text) => dispatch(addTodorequest(text))
});
3
export default connect(mapStateToProps, mapStateToDispatch)(NewTodoForm);
