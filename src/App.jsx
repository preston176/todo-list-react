import { useState } from 'react'
import './App.css'
import { Button }  from '@mui/material';

export default function App() {
  const [newItem, setNewItem] = useState("");
  const [todos, setTodos] = useState([]);
  
  function handleSubmit(e) {
    e.preventDefault();
    setTodos(currentTodos => {
      return [...currentTodos, {id: crypto.randomUUID(), title: newItem, completed: false}]
    })

    setNewItem("");
  }


  return (
    <div className='wrapper bg-slate-600 h-auto w-3/4 rounded-lg m-auto max-h-fit'>
      
    <form onSubmit={handleSubmit} className=' new-item-form py-3.5 flex-col flex px-2.5'>
      <div className='form-row flex flex-col'>
        <label className='text-neutral-100 text-center text-3xl font-normal h-10  ' htmlFor='item'>New Item</label>
        <input type="text" value={newItem} onChange={e => {setNewItem(e.target.value)}} id='item' className='rounded-md outline-none border-none hover:outline-none hover:border-none active:border-none active:outline-none h-7 bg-emerald-700 text-white font-bold text-center'/>
      </div>
      <button className='btn bg-sky-700 hover:bg-sky-500 text-white my-2 m-auto w-full h-8 rounded-lg border-none outline-none'>Add</button>
    </form>
    <h1 className='header text-neutral-100 font-light text-3xl'>Todo List</h1>
    <ul className='list text-white m-3.5 p-3.5'>
    {todos.map(todo => { 
      return (
      
        <li className='my-1' key={todo.id}>
        <label htmlFor="" >
          <input type="checkbox" className='mx-3.5' checked={todo.completed}  />
          {todo.title}
        </label>
        <Button variant="outlined" color="error" size='medium'>Delete</Button>
        {/* <button className='btn btn-danger '>Delete</button> */}
      </li>)
    })}
    </ul>
    </div>
  )
}
