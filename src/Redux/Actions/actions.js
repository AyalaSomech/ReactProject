import { ADD_TODO, REMOVE_TODO, REMOVE_TODO_NEVER } from "./actionType";

export const add_task = (task) => ({
    type: ADD_TODO,
    payload: task,
})
export const remove_task = (task) => ({
    type: REMOVE_TODO,
    payload: task,
}) 
export const remove_todo_never = (task) =>({
    type: REMOVE_TODO_NEVER,
    payload: task,
})
