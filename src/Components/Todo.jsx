import {FaRegTrashAlt} from 'react-icons/fa'


const Todo = ({todo, toggleComplete, deletTodo}) => {

const style ={
    li: `flex justify-between bg-slate-200 p-4 my-2 capitalize`,
    liComplete: `flex justify-between bg-slate-400 p-4 my-2 capitalize`,
    row: `flex`,
    text: `ml-2 cursor-pointer`,
    textComplete: `ml-2 cursor-pointer line-through`,
    button: `cursor-pointer`
}

  return (
    <div>
       <li className={todo.completed ? style.liComplete : style.li}>
        <div className={style.row}>
            <input onChange={() => {toggleComplete(todo)}} type="checkbox" checked={todo.completed ? 'checked' : ''} />
            <p onClick={() => {toggleComplete(todo)}} className={todo.completed ? style.textComplete : style.text}>{todo.text}</p>
        </div>
        <button onClick={() => deletTodo(todo.id)}>{<FaRegTrashAlt />}</button>
       </li>
    </div>
  )
}

export default Todo
