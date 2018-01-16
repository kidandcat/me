import {
  generateRequestActions,
  RequestStatus,
  IRequestStatus
} from "../redux-observable-request";

const prefix = "TWEET_REQUEST";

export const TweetActions = <IRequestStatus>{
  requestInit: `${prefix}_${RequestStatus.init}`,
  requestInProgress: `${prefix}_${RequestStatus.inProgress}`,
  requestSuccess: `${prefix}_${RequestStatus.success}`,
  requestFailed: `${prefix}_${RequestStatus.failed}`,
  requestCancel: `${prefix}_${RequestStatus.cancel}`,
  tweet: `NEW_TWEET`
};

export const TweetActionCreators = generateRequestActions(TweetActions);

export const newTweet = () => ({
  type: TweetActions.tweet
});
