import { createStore } from "redux";
import { rootCard } from "./reducer";

export const store = createStore(rootCard)