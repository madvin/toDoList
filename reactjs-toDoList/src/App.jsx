import { useState, useEffect, use } from "react"

import TodoList from "./components/TodoList"
import TodoInput from "./components/TodoInput"

function App() {

	const [todos, setTodos] = useState([]);
	const [todoValue, setTodoValue] = useState('');

	function persistData(newList) {
		localStorage.setItem('todos', JSON.stringify({
			todos:
				newList
		}))
	}

	function handleAddTodos(newTodo) {
		const newTodoList = [...todos, newTodo]
		persistData(newTodoList)
		setTodos(newTodoList)
	}

	function handleDeleteTodo(todoIndex) {
		const newTodoList = todos.filter((todo, index) => {
			return index !== todoIndex
		})
		persistData(newTodoList)
		setTodos(newTodoList)
	}

	function handleEditTodo(index) {
		const valueToBeEdited = todos[index]
		setTodoValue(valueToBeEdited)
		handleDeleteTodo(index)
	}

	useEffect(() => {
		if (!localStorage) return
		let localTodos = localStorage.getItem('todos')
		if (!localTodos) return
		localTodos = JSON.parse(localTodos)
		setTodos(localTodos)
	}, [])


	return (
		<>
			<TodoInput
				todoValue={todoValue}
				setTodoValue={setTodoValue}
				handleAddTodos={handleAddTodos} />
			<TodoList
				handleEditTodo={handleEditTodo}
				handleDeleteTodo={handleDeleteTodo}
				todos={todos} />
		</>
	)
}

export default App
