
import './App.css'
import {AiOutlinePlus} from 'react-icons/ai'
import Todo from './Components/Todo'
import { useEffect, useState } from 'react'
import { db } from './firebase';
import { query, collection, onSnapshot, QuerySnapshot, doc, updateDoc, addDoc, deleteDoc } from 'firebase/firestore';

function App() {
    const [todos ,setTodos] = useState([]);
    const [input, setInput] = useState('')
// create todo
const createTodo = async (e) => {
  e.preventDefault();
  if(input === '')
  {
    alert("Please fill the details")
    return
  }
  await addDoc(collection(db, 'todos'), {
    text: input,
    completed: false
  })
  setInput('')
}

//read todo from firebase db
useEffect(() => {

const q = query(collection(db, 'todos'));
const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
  let todosArr = []
  QuerySnapshot.forEach((doc) => {
    todosArr.push({...doc.data(), id: doc.id});
  });
  setTodos(todosArr)
})
return () => unsubscribe()
},[])

//update todo in firebase
const toggleComplete = async (todo) => {
    await updateDoc(doc(db, 'todos', todo.id),
    {
      completed: !todo.completed
    }
    )

}
//delete todo
const deletTodo = async (id) => {
  await deleteDoc(doc(db, 'todos', id))
}

  const style={
    bg: `h-screen w-screen p-4 bg-gradient-to-r from-[#2F80ED] to-[#1CB5E0]`,
    container: `bg-slate-100 max-w-[500px] w-full m-auto rounded-md shadow-xl p-4`,
    heading: `text-3xl font-bold text-center text-gray-800 p-2`,
    form: `flex justify-between`,
    input: `border p-2 w-full text-xl`,
    button: `border p-4 ml-2 bg-red-500 text-slate-100`,
    count: `text-center p-2`
  }

  return (
    <div className={style.bg}>
      <div className={style.container}>
      <h3 className={style.heading}>Todo App</h3>
      <form onSubmit={createTodo} className={style.form}>
          <input value={input} onChange={e => {setInput(e.target.value)}} className={style.input} type="text" placeholder='Add Todo' />
          <button className={style.button}>
            <AiOutlinePlus size={30}/>
          </button>
      </form>
      <ul>
      {todos.map((todo, index) => (
        <Todo key={index} todo={todo} toggleComplete={toggleComplete} deletTodo={deletTodo}/>
      ))}
      </ul>
      {todos.length < 1 ? null : <p className={style.count}>You have {todos.length} todos</p>}
      
      </div>
    </div>
  )
}

export default App
