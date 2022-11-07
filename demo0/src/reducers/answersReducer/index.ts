import { constants } from "../../constants";
import { ActionType } from "../../types";

export const answersReducer = (
  state: any[] = [],
  { payload, type }: ActionType
) => {
  switch (type) {
    case constants.SET_ANSWERS:
      return (state = [...state, payload]);
    default:
      return state;
  }
};
