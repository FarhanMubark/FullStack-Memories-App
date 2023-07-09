import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { applyMiddleware } from "redux";
import { compose } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
import "./index.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
const store = createStore(reducers, compose(applyMiddleware(thunk)));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <GoogleOAuthProvider  >
      <App />
    </GoogleOAuthProvider>
  </Provider>
);
