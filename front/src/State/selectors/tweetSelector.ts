import { createSelector } from "reselect";
import { RootState } from "../reducers/index";

const tweetSelector = (state: RootState) => state.tweet.tweetList;
//const jsonParse = (payload: object) => JSON.stringify(payload, null, 4);

export const selectTweets = createSelector(tweetSelector, a => a);
