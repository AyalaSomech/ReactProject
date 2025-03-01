// import { type } from "@testing-library/user-event/dist/type";
import { ADD_TODO, REMOVE_TODO, REMOVE_TODO_NEVER, RESTOR_TODO } from "../Actions/actionType";
const InitialState = {
    TodoList: JSON.parse(localStorage.getItem("list")) || [],
};



export const ToDoReduser= (state = InitialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return { ...state, TodoList: [...state.TodoList, action.payload], };
        case REMOVE_TODO:
            return {
                ...state,
                TodoList: state.TodoList.filter(task => { return task.id !== action.payload.id }),
            };
        default:
            return state;
    }
}