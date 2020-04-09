import React from "react";
// import ReactDOM from "react-dom";

import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

const todoes = [
	{
		name: "Learn setState",
		id: 1,
		done: false,
	},
	{
		name: "Style the List",
		id: 2,
		done: false,
	},
];

class App extends React.Component {
	// you will need a place to store your state in this component.
	// design `App` to be the parent component of your application.
	// this component is going to take care of state, and any change handlers you need to work with your state

	//constructor with state
	constructor() {
		super();
		this.state = {
			todoes: todoes
		};
	}

	//add function to add a new task to the list
	addTodo =(e, task) => {
		console.log(this.state.todoes)
		e.preventDefault();

		const newTodo = {
			name: task,
			id: Date.now(),
			done: false
		};

		this.setState({
			todoes: [...this.state.todoes, newTodo]
		});
		console.log(this.state.todoes)
	};

	// class methods to update state
	toggleTask = taskId => {

		this.setState({
			todoes: this.state.todoes.map(task => {

				//checks taskId against the id of the first task obj in todoes above
				if (taskId === task.id) {
					// if they match update th epurchased boolean on that item
					return {
						...task,
						done: !task.done
					};
					
				}
				return task;
			})
		})
	}

	// removing completed tasks from the list
	clearDone = e => {
		e.preventDefault();

		this.setState({
			todoes: this.state.todoes.filter(task => !task.done)
		})
	}

	render() {
		return (
			<div>
				<h2>Welcome to your Todo App!</h2>
				{/* <TodoForm /> */}
				<TodoList todoes={this.state.todoes}/>
			</div>
		);
	}
}

export default App;
