import { useState } from "react"

import TodoList from "./components/TodoList"
import TodoInput from "./components/TodoInput"

function App() {

	const [todos, setTodos] = useState([
		"Learn React",
		"Build a To-Do App",
		"Master JavaScript"
	])
	return (
		<>
			<TodoInput />
			<TodoList todos={todos}/>
		</>
	)
}

export default App
