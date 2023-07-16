import { Button } from "@mui/material";

export default function TodoItem({completed, id, title, toggleTodo, deleteTodo}) {
    return (
        <li className='my-1'>
        <label htmlFor="" >
          <input type="checkbox" className='mx-3.5' checked={completed} 
          onChange={e => toggleTodo(id, e.target.checked)}

          />
          {title}
        </label>
        <Button 
        onClick={() => deleteTodo(id)} variant="outlined" color="error" size='medium'
        >Delete</Button>
        
      </li>
    )
}