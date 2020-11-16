import React from 'react'
import {useState} from 'react'
import {addTodo,filterTodoDone,filterTodoNot} from '../redux/action'
import {useDispatch}from 'react-redux'


function TodoInput() {
    let  dispatch = useDispatch()
    const [name,setName]=useState('')
    const [id,setId]=useState(1)
    
    return (
        <div>
            <div className="row m-2">
                <input type="text" className=" col from-control" onChange={(e)=>setName(e.target.value)}/>
                <button className=" col btn btn-primary mx-2" onClick={()=>{
                    setId(id+1)
                    dispatch(addTodo({id:id,name:name,done:false}))
                }}>Add</button>
                <button className=" col-0 btn btn-primary mx-2 " onClick={()=>dispatch(filterTodoDone())} >Done</button>
                <button className=" col-0 btn btn-primary mx-2 " onClick={()=>dispatch(filterTodoNot())}>Not</button>
            </div>
        </div>
    )
}

export default TodoInput
