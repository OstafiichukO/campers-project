import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { StateContext } from "./context/StateContext";
import { persistor, store } from "./redux/store"

import { App } from "components/App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter basename="campers-project">
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StateContext>
          <App />
        </StateContext>
      </PersistGate>
    </Provider>
  </BrowserRouter>
);
