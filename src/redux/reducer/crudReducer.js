import axios from "axios";

const intState = {
  card: [],
};

export const cardReducer = (state = intState, action) => {
  switch (action.type) {
    case "SET_CARDS":
      return {
        ...state,
        card: action.payload,
      };

    default:
        return state;
  }
};
