// import { createStore } from "redux";
// import { rootCard } from "./reducer";

// export const store = createStore(rootCard)

// store.js
import { createStore, applyMiddleware, combineReducers } from 'redux';
import {thunk} from 'redux-thunk';
import { cardReducer } from './reducer/crudReducer';


const rootReducer = combineReducers({
  card: cardReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));


