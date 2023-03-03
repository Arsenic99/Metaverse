import { applyMiddleware, createStore } from "redux";
import { RegisterReducer } from "./reducers/reducer";
import thunkMiddleware from "redux-thunk";


export const store: object = createStore(RegisterReducer, applyMiddleware(thunkMiddleware));