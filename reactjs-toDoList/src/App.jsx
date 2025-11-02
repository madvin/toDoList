import { useState } from "react"

import TodoList from "./components/TodoList"
import TodoInput from "./components/TodoInput"

function App() {

	const [todos, setTodos] = useState([
		"Learn React",
		"Build a To-Do App",
		"Master JavaScript"
	])

	function handleAddTodos(newTodo) {
		const newTodoList = [...todos, newTodo]
		setTodos(newTodoList)
	}

	function handleDeleteTodo(todoIndex) {
		const newTodoList = todos.filter((todo, index) => {
			return index !== todoIndex
		})
		setTodos(newTodoList)
	}



	return (
		<>
			<TodoInput handleAddTodos={handleAddTodos}/>
			<TodoList handleDeleteTodo={handleDeleteTodo} todos={todos}/>
		</>
	)
}

export default App
