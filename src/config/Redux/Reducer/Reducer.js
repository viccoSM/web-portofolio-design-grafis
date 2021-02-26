import { combineReducers } from "redux";

const initialStateAuth = {
  islogin: false,
  user: {},
};

const AuthReducer = (state = initialStateAuth, action) => {
  if (action.type === "CHANGE_LOGIN") {
    return {
      ...state,
      islogin: action.value,
    };
  }
  if (action.type === "CHANGE_USER") {
    return {
      ...state,
      user: action.value,
    };
  }
  return state;
};

const reducer = combineReducers({ AuthReducer });
export default reducer;
