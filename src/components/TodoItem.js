import React, { useState } from 'react'
import {useDispatch}from 'react-redux'
import {deletTodo,updateTodo}from '../redux/action'



function TodoItem({todo}) {
    console.log(todo)
    let [done,setDone]=useState({t:todo.done,d:"not"})
    let [edittable,setedittable]=useState(false)
    let  dispatch = useDispatch()
    return (
        <div>
            <div className="row mx-2 align-items-center">
                <div>{todo.id}</div>
                <div className="col m-2" style={todo.done?{background:"red"}:null}>
                   {edittable? <input type="text" size="150" style={{textAlign:"center"}}/> : <h4>{todo.name}</h4>}
                </div>
                <button className="btn btn-primary m-2"onClick={()=>setedittable(!edittable)}>edit</button>
                <button className="btn btn-danger m-2"
                onClick={()=>dispatch(deletTodo(todo.id))}>remove</button>
                <button className="btn btn-primary m-2" onClick={()=>dispatch(updateTodo(todo.name))
                    
                    
                }>{todo.done? "isDone":"not"}</button>
            </div>
        </div>
    )
}

export default TodoItem
