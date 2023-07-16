import TodoItem from "./TodoItem"

export default function TodoList({ todos , toggleTodo, deleteTodo}) {
    return (
        <ul className='list text-white m-3.5 p-3.5'>
    {todos.length === 0 && <p className='text-center text-2xl'>No Todos</p>}
    {todos.map(todo => { 
      return (
        <TodoItem {...todo}
       key={todo.id} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
    
      )
    })}
    </ul>
    )
}