import { createStore } from "redux";

const SUBMIT_NAME = "SUBMIT_NAME";

export const submitDetails = (per) => {
  return {
    type: SUBMIT_NAME,
    payload: per,
  };
};

const initialState = {
  employees: [
    
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SUBMIT_NAME":
      return {

        employees: [...state.employees, action.payload],
      };
    default:
      return state;
  }
};

const store = createStore(reducer);


export default store;
