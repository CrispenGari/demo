import { combineReducers, legacy_createStore } from "redux";
import { todosReducer } from "./todosReducer";

export const store = legacy_createStore(
  combineReducers({
    todos: todosReducer,
  })
);
