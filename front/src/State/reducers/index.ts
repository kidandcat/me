import { combineReducers, AnyAction } from "redux";
import { tweetReducer, TweetState } from "./tweet";

export interface RootState {
  tweet: TweetState;
}

export const rootReducer = combineReducers<AnyAction>({
  tweet: tweetReducer
});
