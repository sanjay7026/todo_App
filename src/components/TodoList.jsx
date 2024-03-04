import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo } from '../todos/todoSlice';

const TodoList = () => {
    const todoList = useSelector(state => state.todos);
    const dispatch = useDispatch();
  return (
    <form className="mb-3 row ">
      {todoList.map((todo) => (
        
        <li key={todo.id} className='form-control'>
            {todo.text}
            <button className='btn btn-primary button'
            onClick={() => dispatch(removeTodo(todo.id))} >Delete</button>
        </li>
        
      ))}
      
      
    </form>
  )
}

export default TodoList;
