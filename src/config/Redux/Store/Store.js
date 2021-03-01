import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import reducer from "../Reducer/Reducer";

export const store = createStore(reducer, applyMiddleware(thunk));
