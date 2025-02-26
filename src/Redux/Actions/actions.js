import { ADD_TODO, REMOVE_TODO } from "./actionType";

export const add_task = (task) => ({
    type: ADD_TODO,
    payload: task,
})
export const remove_task = (taskId) => ({
    type: REMOVE_TODO,
    payload: taskId,
}) 