export const ADD_TODO="ADD_TODO"
export const DELET_TODO="DELLET_TODO"
export const UPDAT_TODO="ABDATE_TODO"
export const FILTER_TODO_DONE="FILTER_TODO_DONE"
export const FILTER_TODO_NOT="FILTER_TODO_NOT"
export function addTodo(todo){
    return{
        type:ADD_TODO,
        payload:todo,
    }
}

export function deletTodo(todoId){
    return{
        type:DELET_TODO,
        payload:todoId,
    }
}
export function updateTodo(todo){
    return{
        type:UPDAT_TODO,
        payload:todo,
    }
}
export function filterTodoDone(todo){
    return{
        type:FILTER_TODO_DONE,
        payload:todo,
    }
}
export function filterTodoNot(todo){
    return{
        type:FILTER_TODO_NOT,
        payload:todo,
    }
}