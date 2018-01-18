import { TweetActions } from "../actions/tweet";
import { Reducer } from "redux";
import {
  RequestStatus,
  generateRequestReducer
} from "../redux-observable-request";

export type TweetState = {
  tweetList: object[];
};

const INITIAL_STATE = {
  tweetList: []
};

export const tweetReducer: Reducer<TweetState> = (
  state: TweetState = INITIAL_STATE,
  action
) => {
  switch (action.type) {
    case TweetActions.tweet:
      return {
        ...state,
        tweetList: {
          ...state.tweetList,
          [action.payload.id]: action.payload
        }
      };
    case TweetActions.remove:
      const { [action.payload.id]: omit, ...res } = state.tweetList;
      return {
        ...state,
        tweetList: {
          ...res
        }
      };
    default:
      return state;
  }
};
