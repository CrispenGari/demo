import { constants } from "../../constants";
import { ActionType } from "../../types";

export const counterReducer = (state = 0, { payload, type }: ActionType) => {
  switch (type) {
    case constants.SET_COUNTER:
      return (state = state + payload);
    default:
      return state;
  }
};
