import TodoList from "./components/TodoList"
import TodoInput from "./components/TodoInput"

function App() {

	const [todos, setTodos] = useState([])
	return (
		<>
			<TodoInput />
			<TodoList todos={todos}/>
		</>
	)
}

export default App
