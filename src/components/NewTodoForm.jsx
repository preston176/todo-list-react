import { useState } from "react";

export default function NewTodoForm({ onSubmit }) {
    
    const [newItem, setNewItem] = useState("");
    function handleSubmit(e) {
        e.preventDefault();
    if (newItem === "") return;
    onSubmit(newItem)
        setNewItem("");
      }
    return (
        <form onSubmit={handleSubmit} className=' new-item-form py-3.5 flex-col flex px-1 justify-center text-center min-h-max'>
      <div className='form-row flex flex-col'>
        <label className='text-neutral-100 text-center text-3xl font-normal h-10  ' htmlFor='item'>New Item</label>
        <input type="text" value={newItem} onChange={e => {setNewItem(e.target.value)}} id='item' className='rounded-md outline-none border-none hover:outline-none hover:border-none active:border-none active:outline-none h-7 bg-emerald-700 text-white font-bold text-center'/>
      </div>
      <button className='btn bg-sky-700 hover:bg-sky-500 text-white my-2 m-auto w-full h-8 rounded-lg border-none outline-none'>Add</button>
    </form>
    )
}