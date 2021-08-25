import { useReducer } from "react";

const createFilterReducer = (initialState) => (state, action) => {
  switch (action.type) {
    case "RESET":
      return initialState;
    case "SET": {
      return { ...state, [action.filterName]: action.value };
    }
    default:
      return state;
  }
};
