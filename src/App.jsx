import { useEffect, useState } from 'react'
import './App.css'
import NewTodoForm from './components/NewTodoForm';
import TodoList from './components/TodoList';
import StickyFooter from './components/MUI/StickyFooter';

export default function App() {
  
  const [todos, setTodos] = useState(() => {
/* The code `const localValue = localStorage.getItem('ITEMS')` is retrieving the value stored in the
browser's `localStorage` with the key `'ITEMS'`. */
    const localValue = localStorage.getItem('ITEMS')
    if (localValue == null) return []


    return JSON.parse(localValue)
  });
/* The `useEffect` hook is used to perform side effects in a functional component. In this case, the
`useEffect` hook is used to store the `todos` state in the browser's `localStorage` whenever the
`todos` state changes. */
  useEffect(() => {
    localStorage.setItem('ITEMS', JSON.stringify(todos))
  }, [todos])

  function addTodo(title) {
    setTodos(currentTodos => {
          return [...currentTodos, {id: crypto.randomUUID(), title, completed: false}]
        })
  }
  
  
function toggleTodo (id, completed) {
  setTodos(currentTodos => {
    return currentTodos.map(todo => {
      if (todo.id === id) {
        return {...todo, completed}
      }
      return todo;
  })})
}

function deleteTodo (id) {
  setTodos(currentTodos => {
    return currentTodos.filter(todo => todo.id !== id)
  })}

  return (
    <>
    <div className='wrapper bg-slate-600 h-auto w-3/4 rounded-lg m-auto max-h-fit'>
      <NewTodoForm onSubmit={addTodo}/>
    <h1 className='header text-neutral-100 font-light text-3xl'>Todo List</h1>
    <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
    
    </div>
    <StickyFooter />
    </>
  )
}
