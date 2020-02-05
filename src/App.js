// import React from 'react';
import React, { Component } from "react";
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Todos from "./components/Todos";
import Header from "./components/layout/Header";
import AddTodo from "./components/AddTodo";
import uuid from 'uuid';

import "./App.css";

class App extends Component {
	state = {
		todos: [
			{
				id: uuid.v4(),
				title: "Take out the trash",
				completed: false,
			},
			{
				id: uuid.v4(),
				title: "Dinner with mrs",
				completed: false,
			},
			{
				id: uuid.v4(),
				title: "Meeting with boss",
				completed: false,
			},
		],
	};
//METHODS:
	markComplete = id => {
		//Toggles completed
		this.setState({
			todos: this.state.todos.map(todo => {
				if (todo.id === id) {
					todo.completed = !todo.completed;
				}
				return todo;
			}),
		});
	};
	delTodo = id => {
		//Delete TodoItem by ID
		this.setState({
			todos: [...this.state.todos.filter(todo => todo.id !== id)],
		});
  };
  addTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title, //ES6 - if val and prop are same
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] });
  }
//RENDER:
	render() {
		return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route path="/" render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                <Todos
                  todos={this.state.todos}
                  markComplete={this.markComplete}
                  delTodo={this.delTodo}
                />
              </React.Fragment>
            )} />
          </div>
        </div>
      </Router>
		);
	}
}

// function App() {
//   return (
//     <div className="App">
//       <Todos />
//     </div>
//   );
// }

export default App;
