import constants from "../constants";

export const setTodos = (payload) => {
  return {
    type: constants.SET_TODOS,
    payload,
  };
};

export const setUser = (payload) => {
  return {
    type: constants.SET_USER,
    payload,
  };
};
