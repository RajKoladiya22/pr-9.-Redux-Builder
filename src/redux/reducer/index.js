import { combineReducers } from "redux";
import { cardReducer } from "./crudReducer";

export const rootCard = combineReducers({
  cardReducer,
});
