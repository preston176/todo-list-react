
import './App.css'
import {AiOutlinePlus} from 'react-icons/ai'


function App() {

  const style={
    bg: `h-screen w-screen p-4 bg-gradient-to-r from-[#2F80ED] to-[#1CB5E0]`
  }

  return (
    <div className={style.bg}>
      <div className={style.container}>
      <h3 className={style.heading}>Todo App</h3>
      <form className={style.form}>
          <input className={style.input} type="text" placeholder='Add Todo' />
          <button className={style.button}>
            <AiOutlinePlus size={30}/>
          </button>
      </form>
      <ul>
        <li></li>
        <li></li>
      </ul>
      </div>
    </div>
  )
}

export default App
