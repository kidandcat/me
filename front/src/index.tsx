import * as React from "react";
import * as ReactDOM from "react-dom";
import { App } from "./components/app";
import { Provider } from "react-redux";
import { configureStore } from "./State/store";
import { loadTweetsService } from "./tweets.service";

const store = configureStore({});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

loadTweetsService();
