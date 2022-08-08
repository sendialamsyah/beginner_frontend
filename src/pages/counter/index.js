import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {addTodolist} from '../../configs/redux/actions/todoAction'

const Todo = () => {
    const [todo, setTodo] = useState('')
    const dispatch = useDispatch()
    const {todos, isLoading} = useSelector((state)=>state.todo)

    const handleAddTodo =()=>{
        dispatch(addTodolist(todo))
        setTodo('')
    }
  return (
    <div>
        <h1>page todo</h1>
        <input type="text" name="todo" placeholder='inputkan Todo' value={todo} onChange={(e)=> setTodo(e.target.value)} />
        <button onClick={handleAddTodo}> {isLoading ? 'Loading...': 'Simpan'}</button>
        {/* <p>{JSON.stringify(stateGlob)}</p> */}
        {/* {todos.length > 0  ? 
        <ul>
            {todos.map((item, index)=>(
                <li key={index}>{item.name} -- {item.createdAt}</li>
            ))}
        </ul>
        : <h4>data not found</h4>
        } */}
        {todos.length > 0 && <ul>
            {todos.map((item, index)=>(
                <li key={index}>{item.name} -- {item.createdAt}</li>
            ))}
        </ul>}
        {todos.length < 1 && 
        <h4>todos not found</h4>
        }
    </div>
  )
}

export default Todo