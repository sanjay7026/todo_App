import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../todos/todoSlice';

const AddTodo = () => {
    const [todoInput, setTodoInput] = useState('');
    const dispatch = useDispatch();

    const addTodoHandler = (event) =>{
        event.preventDefault()
        dispatch(addTodo(todoInput)) 
        setTodoInput('')
    };
  return (
    <div className='react'>
        <h2>React Rudex</h2>
        <form className="mb-3 row " onSubmit={addTodoHandler}>            
            <div className="col-auto">                
                <input type="text" className="form-control" value={todoInput}  placeholder="Enter Todo Here" onChange={(event) => setTodoInput(event.target.value) } />
            </div>
            <div className="col-auto">
                <button type="submit" className="btn btn-primary mb-3">AddTodo</button>
            </div>
        </form>
      
    </div>
  )
}

export default AddTodo;
