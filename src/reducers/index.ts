import { combineReducers, legacy_createStore } from "redux";
import { answersReducer } from "./answersReducer";
import { counterReducer } from "./counterReducer";
import { questionsReducer } from "./questionsReducer";

export const store = legacy_createStore(
  combineReducers({
    counter: counterReducer,
    answers: answersReducer,
    questions: questionsReducer,
  })
);
