import constants from "../constants";

export const todosReducer = (state = [], action) => {
  switch (action.type) {
    case constants.SET_TODOS:
      return (state = action.payload);
    default:
      return state;
  }
};
