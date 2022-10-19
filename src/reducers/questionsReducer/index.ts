import { constants } from "../../constants";
import { ActionType } from "../../types";

export const questionsReducer = (state = [], { payload, type }: ActionType) => {
  switch (type) {
    case constants.SET_QUESTIONS:
      return (state = payload);
    default:
      return state;
  }
};
