import { ToDoReduser } from "./Reducers/ToDoReducers";
import { RicycleBin } from "./Reducers/ricycleBinReducer";
import { applyMiddleware, legacy_createStore as createStore, combineReducers } from "redux";
import { IfNull } from "./Middleware/ifNull";

const rootReducer = combineReducers({
    todo: ToDoReduser,
    ricycle: RicycleBin,
})

export const store = createStore(rootReducer, applyMiddleware(IfNull));
console.log(store.getState())