import {FaRegTrashAlt} from 'react-icons/fa'


const Todo = ({todo}) => {

const style ={

}

  return (
    <div>
       <li className={style.li}>
        <div className={style.row}>
            <input type="checkbox" />
            <p className={style.text}>{todo}</p>
        </div>
        <button>{FaRegTrashAlt}</button>
       </li>
    </div>
  )
}

export default Todo
