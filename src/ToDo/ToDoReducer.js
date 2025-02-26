// import { type } from "@testing-library/user-event/dist/type";
import { ADD_TODO, REMOVE_TODO } from "../Redux/Actions/actionType";
const InitialState ={
    TodoList: JSON.parse(localStorage.getItem("list"))||[],
};

// export const ADD = "ADD";

// export const addTodo = (payload) =>({type: ADD, payload});

export const ToDo_Add =(state =InitialState, action) => {
    
}