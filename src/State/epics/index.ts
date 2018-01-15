import { combineEpics } from "redux-observable";
import { TweetActions } from "../actions/tweet";
import { generateRequestEpic } from "./epic-generators";

export const rootEpic = combineEpics(
  generateRequestEpic(`http://ip-api.com/json`, TweetActions)
);
