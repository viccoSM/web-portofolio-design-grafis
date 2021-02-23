const { createStore } = require("redux");

const initialState = {
  popup: [],
};

const reducer = (state = initialState, action) => {
  return state;
};

const store = createStore(reducer);

export default store;
