import TodoCard from "./TodoCard"

export default function TodoList() {

    let todos = [
        'Sample Todo 1',
        'Sample Todo 2',
        'Sample Todo 3'
    ]

    return (
        <ul className='main'>
            {todos.map((todo, todoIndex) => {
                return (
                   <TodoCard key ={todoIndex}>
                    <p>{todo}</p>
                   </TodoCard>
                )
            })}
        </ul>
    )
}