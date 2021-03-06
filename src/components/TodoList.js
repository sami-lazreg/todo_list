import React from 'react'
import TodoItem from './TodoItem'
import {useSelector} from 'react-redux'

function TodoList() {
    let todos = useSelector(state => state)
    
    
    return (
        <div className="my-3">
           {todos.map((todo,i)=>{
               return <TodoItem key={i} todo={todo}/>
           })}
        </div>
    )
}

export default TodoList
