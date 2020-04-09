import React from "react";
import "./Todo.css";

const Todo = props => {
    console.log("Todo props:", props);
    return (
        <div>
            <p>{props.todo.name}</p>
        </div>
    )
}

export default Todo;