import { useState } from 'react'
import './App.css'
import { Button }  from '@mui/material';
import NewTodoForm from './components/NewTodoForm';
import TodoList from './components/TodoList';

export default function App() {
  
  const [todos, setTodos] = useState([]);

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
    <div className='wrapper bg-slate-600 h-auto w-3/4 rounded-lg m-auto max-h-fit'>
      <NewTodoForm onSubmit={addTodo}/>
    <h1 className='header text-neutral-100 font-light text-3xl'>Todo List</h1>
    <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
    </div>
  )
}
