import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

// reducers
import { cardsReducer } from "./reducer";

export const store = createStore(
  combineReducers({
    cards: cardsReducer
  }),
  applyMiddleware(thunk)
);
