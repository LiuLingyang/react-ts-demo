import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import store from "./store";
import App from "./App";
import { StoreEnhancer } from "redux";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__: () => StoreEnhancer;
  }
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
