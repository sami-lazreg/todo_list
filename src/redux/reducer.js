
import { ADD_TODO, UPDAT_TODO, DELET_TODO, FILTER_TODO_DONE,FILTER_TODO_NOT } from "./action";
import {todos} from './state'
import {v1 as uuid} from 'uuid'

export let reducer = (state=todos, action) => {
  
  
  switch (action.type) {
    case ADD_TODO:
      let newTodoAdd=[...state,]
      newTodoAdd.push(action.payload)
       
      return  newTodoAdd
      break;
    case DELET_TODO:
      
      let newTodo=[...state];
        newTodo=newTodo.filter(c=>c.id != action.payload)
        return newTodo
      break;
    case UPDAT_TODO:
      let index =state.findIndex(c=>{return c.name == action.payload});
      state[index].done=true
      let ar=state.filter(c=>c.id!=0)
      return ar
      break;

      case FILTER_TODO_DONE:
        let newTodoFilter=[...state]
        newTodoFilter= newTodoFilter.filter(c=>c.done == true)
        return newTodoFilter
      break;
      case FILTER_TODO_NOT:
        let newTodoFilterNot=[...state]
        newTodoFilterNot= newTodoFilterNot.filter(c=>c.done == false)
        return newTodoFilterNot
      break;

    default:
      
  }
  return state;
};
