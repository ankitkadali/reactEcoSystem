import React from "react";
import {hot} from "react-hot-loader"
import Todolist from "./todos/TodoList";
import "./App.css";

const App = () => (
        // <div className="App">
        //     Hello, World!!! this is from earth
        // </div>
        <Todolist />
    );
export default hot(module)(App);