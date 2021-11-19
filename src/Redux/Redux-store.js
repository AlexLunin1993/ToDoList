import { combineReducers, createStore } from "redux";
import TasksReducer from "./TasksReducer";

export let reducers = combineReducers (
    {
        tasks: TasksReducer
    }
);

let store = createStore (reducers)

export default store;