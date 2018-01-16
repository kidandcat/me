import { combineEpics } from "redux-observable";
import { TweetActions } from "../actions/tweet";
import { generateRequestEpic } from "../redux-observable-request";

export const rootEpic = combineEpics(
  generateRequestEpic(`http://ip-api.com/json`, TweetActions)
);
