import { TweetActions } from "../actions/tweet";
import { Reducer } from "redux";
import {
  RequestStatus,
  generateRequestReducer
} from "../redux-observable-request";

export type TweetState = {
  tweetList: object[];
  tweetRequestStatus: string;
  tweetRequestPayload: any;
};

const INITIAL_STATE = {
  tweetList: [],
  tweetRequestStatus: RequestStatus.cancel,
  tweetRequestPayload: null
};

const tweetRequestReducer = generateRequestReducer(
  TweetActions,
  "tweetRequestStatus",
  "tweetRequestPayload"
);

export const tweetReducer: Reducer<TweetState> = (
  state: TweetState = INITIAL_STATE,
  action
) => {
  switch (action.type) {
    case "SOME_ACTION":
      return {
        ...state,
        something: "here"
      };
  }
  return tweetRequestReducer(state, action);
};
