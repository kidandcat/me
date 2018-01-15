import { RequestStatus, IRequestStatus } from "../type";
import { generateRequestActions } from "./action-generators";

const prefix = "TWEET_REQUEST";

export const TweetActions = <IRequestStatus>{
  requestInit: `${prefix}_${RequestStatus.init}`,
  requestInProgress: `${prefix}_${RequestStatus.inProgress}`,
  requestSuccess: `${prefix}_${RequestStatus.success}`,
  requestFailed: `${prefix}_${RequestStatus.failed}`,
  requestCancel: `${prefix}_${RequestStatus.cancel}`
};

export const TweetActionCreators = generateRequestActions(TweetActions);
