import { combineReducers, legacy_createStore } from "redux";
import { todosReducer } from "./todosReducer";
import { userReducer } from "./userReducer";

export const store = legacy_createStore(
  combineReducers({
    todos: todosReducer,
    user: userReducer,
  })
);
