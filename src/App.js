//Components
import React, { Component } from "react";
import Todos from "./components/Todos";
import Header from "./components/layout/Header";
import AddTodo from "./components/AddTodo";
import About from "./components/pages/About";
//Modules
import { BrowserRouter as Router, Route } from "react-router-dom";
// import uuid from 'uuid';
import axios from "axios";
//CSS
import "./App.css";

const API = "https://jsonplaceholder.typicode.com/todos";
const LIMIT = "?_limit=10";

class App extends Component {
	state = {
		todos: [],
	};

	componentDidMount() {
		axios.get(API + LIMIT).then(res => this.setState({ todos: res.data }));
	}
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
		axios.delete(`${API}/${id}`).then(res =>
			this.setState({
				todos: [...this.state.todos.filter(todo => todo.id !== id)],
			})
		);
	};
	addTodo = title => {
		axios
			.post(API, {
				title,
				completed: false,
			})
			.then(res => this.setState({ todos: [...this.state.todos, res.data] }));
	};
	//RENDER:
	render() {
		return (
			<Router>
				<div className="App">
					<div className="container">
						<Header />
						<Route
							exact
							path="/"
							render={props => (
								<React.Fragment>
									<AddTodo addTodo={this.addTodo} />
									<Todos
										todos={this.state.todos}
										markComplete={this.markComplete}
										delTodo={this.delTodo}
									/>
								</React.Fragment>
							)}
						/>
						<Route path="/about" component={About} />
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
