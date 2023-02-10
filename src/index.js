import React from "react";
import App from "./App";
import { persistStore } from "redux-persist";
import { PresistGate } from "redux-persist/lib/integration/react";
import { Provider } from "react-redux";
import { configureStore } from "./store";
import ReactDOM from "react-dom";

const store = configureStore();
const persistor = persistStore(store);
ReactDOM.render(
  <Provider store={store}>
    {/* <PresistGate persistor={persistor} loading={<div>...loading</div>}> */}
      <App />
    {/* </PresistGate>   */}
  </Provider>,
  document.getElementById("root")
);
