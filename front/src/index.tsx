import * as React from "react";
import * as ReactDOM from "react-dom";
import { App } from "./components/app";
import { Provider } from "react-redux";
import { configureStore } from "./State/store";
import { loadTweetsService } from "./tweets.service";
import { boundActions } from "./State/actions";

const store = configureStore({});
const actionCreators = boundActions(store.dispatch);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

loadTweetsService(actionCreators.boundNewTweet);
