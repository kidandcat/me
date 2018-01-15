import { createSelector } from "reselect";
import { RootState } from "../reducers/index";

export const tweetSelector = (state: RootState) => state.tweet.tweetList;
export const payloadSelector = (state: RootState) =>
  state.tweet.tweetRequestPayload;
const mapPayload = (payload: object) => JSON.stringify(payload, null, 4);

export const selectTweets = createSelector(
  tweetSelector,
  tweetList => tweetList
);

export const selectPayload = createSelector(payloadSelector, mapPayload);
