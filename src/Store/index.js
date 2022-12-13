import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducer from "./Reducers";

const store = createStore(
  reducer,
  compose(
    applyMiddleware(thunk),

    typeof window === "object" &&
      typeof window._REDUX_DEVTOOLS_EXTENSION__ !== "undefined"
      ? window._REDUX_DEVTOOLS_EXTENSION__()
      : (f) => f
  )
);

export default store;
