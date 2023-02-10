import React from "react";
import './styles/TodoListItem.css';

const TodoListItem =({todo,onRemove,markComplete,itemkey}) => {
    const handleMarkAsDone =() =>{
        markComplete(todo.text);
    }
    const handleRemoveitem = () =>{
        console.log('called')
        onRemove(todo.id);
    }

    return <div className="todo-item-container">
        <h3>{todo.text}</h3>
        <div className="buttons-container" key={`${itemkey}_div`}>
            {todo.isCompleted ? null  : <button className="done-button" onClick={handleMarkAsDone} key={`${itemkey}_donebtn`}>Mark as done</button> }
            <button className="remove-button" key={`${itemkey}_rmvbtn`} onClick={handleRemoveitem}>Remove</button>
        </div>
        
    </div>
}

export default TodoListItem;