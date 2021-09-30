import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const initState = 0;
const reducer = (state = initState, action) => {
  switch (action) {
    case "Add":
      return state + 1;
    case "Sub":
      return state - 1;
    case "Clear":
      return initState;
    case "Set1000":
      return 1000;
    default:
      return state;
  }
};

const store = createStore(reducer);

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
