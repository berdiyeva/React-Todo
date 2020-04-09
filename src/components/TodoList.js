// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";

import Todo from "./Todo";

const TodoList = props => {
    console.log("todo list props", props);
    return(
        <div>
            {props.todoes.map(todo => (
                <Todo key={todo.id} todo={todo} toggleTask={props.toggleTask}/>
            ))}
            <button onClick={props.clearDone}>Clear Completed</button>
        </div>
    );
};

export default TodoList;