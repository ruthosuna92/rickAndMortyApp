import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./reducer";
import { thunk } from "redux-thunk";

const composeEnhacer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // esta linea es para conectar don la extension

const store = createStore(
  reducer,
  composeEnhacer(applyMiddleware(thunk))
); // Esta linea nos permite hacer peticiones a un servidor

// hello!
export default store;