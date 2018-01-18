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
        tweetList: [...state.tweetList, action.payload]
      };
    case TweetActions.remove:
      return {
        ...state,
        tweetList: state.tweetList.filter(
          item => item.text !== action.payload.text
        )
      };
    default:
      return state;
  }
};
