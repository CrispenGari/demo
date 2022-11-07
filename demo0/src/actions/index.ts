import { constants } from "../constants";

export const setCounter = (payload: any) => {
  return {
    type: constants.SET_COUNTER,
    payload: payload,
  };
};

export const setAnswers = (payload: any) => {
  return {
    type: constants.SET_ANSWERS,
    payload: payload,
  };
};

export const setQuestions = (payload: any) => {
  return {
    type: constants.SET_QUESTIONS,
    payload: payload,
  };
};
