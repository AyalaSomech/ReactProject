import { ADD_TODO, REMOVE_TODO_NEVER, REMOVE_TODO } from "../Actions/actionType";

const InitialState = {
    arrRecircle: JSON.parse(localStorage.getItem("list")) || [],
}

export const RicycleBin = (state = InitialState, action) => {
    switch (action) {
        case REMOVE_TODO:
            return { ...state, arrRecircle: [...state, action.payload] };
        case REMOVE_TODO_NEVER:
            return {
                ...state,
                arrRecircle: state.arrRecircle.filter(task => { return task.id !== action.payload.id })
            };
        case ADD_TODO:
            return {
                ...state,
                arrRecircle: state.arrRecircle.filter(task => { return task.id !== action.payload.id })
            }
        default:
            return state;

    }
}


