import { useState } from 'react'
import './App.css'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='wrapper bg-slate-600 h-96 w-auto rounded-lg m-auto '>
      
    <form className=' new-item-form py-3.5 flex-col flex px-2.5'>
      <div className='form-row flex flex-col'>
        <label className='text-neutral-100 text-center text-3xl font-normal h-10  ' htmlFor='item'>New Item</label>
        <input type="text" id='item' className='rounded-md outline-none border-none hover:outline-none hover:border-none active:border-none active:outline-none h-7 transition-all duration-300'/>
      </div>
      <button className='btn bg-sky-700 hover:bg-sky-500 text-white my-2 m-auto w-full h-8 rounded-lg'>Add</button>
    </form>
    <h1 className='header text-neutral-100 font-light text-3xl'>Todo List</h1>
    <ul className='list text-white m-3.5 p-3.5'>
      <li className='my-1'>
        <label htmlFor="" >
          <input type="checkbox"  />
          Item 1
        </label>
        <button className='btn btn-danger mx-3.5'>Delete</button>
      </li>
      <li>
        <label htmlFor="">
          <input type="checkbox" />
          Item 2
        </label>
        <button className='btn btn-danger mx-3.5'>Delete</button>
      </li>
    </ul>
    </div>
  )
}
