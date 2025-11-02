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

	return (
		<>
			<TodoInput handleAddTodos={handleAddTodos}/>
			<TodoList todos={todos}/>
		</>
	)
}

export default App
