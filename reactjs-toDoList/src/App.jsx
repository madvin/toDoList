import { useState } from "react"

import TodoList from "./components/TodoList"
import TodoInput from "./components/TodoInput"

function App() {

	const [todos, setTodos] = useState([]);
	const [todoValue, setTodoValue] = useState('');

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

	function handleEditTodo(index) {
		const valueToBeEdited = todos[index]
		setTodoValue(valueToBeEdited)
		handleDeleteTodo(index)
	}


	return (
		<>
			<TodoInput 
			todoValue={todoValue} 
			setTodoValue={setTodoValue}
			handleAddTodos={handleAddTodos}/>
			<TodoList 
			handleEditTodo={handleEditTodo}
			handleDeleteTodo={handleDeleteTodo}
			 todos={todos}/>
		</>
	)
}

export default App
