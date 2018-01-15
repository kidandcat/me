import { createSelector } from "reselect";
import { RootState } from "../reducers/index";

const tweetSelector = (state: RootState) => state.tweet.tweetList;
const payloadSelector = (state: RootState) => state.tweet.tweetRequestPayload;
const mapPayload = (payload: object) => JSON.stringify(payload, null, 4);

export const selectPayload = createSelector(payloadSelector, mapPayload);
export const selectTweets = createSelector(tweetSelector, tweets => tweets);
