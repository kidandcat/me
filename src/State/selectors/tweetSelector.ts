import { createSelector } from "reselect";
import { RootState } from "../reducers/index";

const tweetSelector = (state: RootState) => state.tweet.tweetList;
const payloadSelector = (state: RootState) => state.tweet.tweetRequestPayload;

export const selectTweets = createSelector(
  tweetSelector,
  tweetList => tweetList
);

export const selectPayload = createSelector(
  payloadSelector,
  payload => payload
);
